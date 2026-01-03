import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { INSTITUTE_NAME } from 'src/components/user/Data';
import logo from 'src/components/user/images/logos/nins-logo-topbar.png';
import useLoadingSpinner from 'src/hooks/useLoadingSpinner';
import './header.css';

export default function Topbar() {
    const [isNavigating, setIsNavigating] = useState(false);
    const loadingSpinner = useLoadingSpinner();
    const enableLoader = import.meta.env.VITE_ENABLE_LOADER === 'true';

    const handleNavClick = () => {
        if (enableLoader) {
            setIsNavigating(true);
            // Hide loader after a brief delay to simulate navigation
            setTimeout(() => setIsNavigating(false), 800);
        }
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <img src={logo} alt="logo" />
                        </LinkContainer>
                    </Navbar.Brand>

                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <h6 className="new-line">{INSTITUTE_NAME}</h6>
                        </LinkContainer>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link onClick={handleNavClick}>হোম</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/notice">
                                <Nav.Link onClick={handleNavClick}>বিজ্ঞপ্তি</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/gallery">
                                <Nav.Link onClick={handleNavClick}>গ্যালারি</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/course">
                                <Nav.Link onClick={handleNavClick}>কোর্স</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/director">
                                <Nav.Link onClick={handleNavClick}>পরিচালকগণ</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/teacher">
                                <Nav.Link onClick={handleNavClick}>শিক্ষকবৃন্দ</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/staff">
                                <Nav.Link onClick={handleNavClick}>কর্মিবৃন্দ</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link onClick={handleNavClick}>সম্পর্কে</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/contact">
                                <Nav.Link onClick={handleNavClick}>যোগাযোগ</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Navigation Loading Overlay */}
            {enableLoader && isNavigating && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    {loadingSpinner}
                </div>
            )}
        </div>
    );
}
