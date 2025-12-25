import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { INSTITUTE_NAME } from '../../Data';
import logo from '../../images/logos/nins-logo-topbar.png';
import './header.css';

export default function Topbar() {
    return (
        <Navbar collapseOnSelect expand='lg'>
            <Container fluid>
                <Navbar.Brand>
                    <LinkContainer to='/'>
                        <img src={logo} alt='logo' />
                    </LinkContainer>
                </Navbar.Brand>

                <Navbar.Brand>
                    <LinkContainer to='/'>
                        <h6 className='new-line'>{INSTITUTE_NAME}</h6>
                    </LinkContainer>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <LinkContainer to='/'>
                            <Nav.Link>হোম</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/notice'>
                            <Nav.Link>বিজ্ঞপ্তি</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/gallery'>
                            <Nav.Link>গ্যালারি</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/course'>
                            <Nav.Link>কোর্স</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/director'>
                            <Nav.Link>পরিচালকগণ</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/teacher'>
                            <Nav.Link>শিক্ষকবৃন্দ</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/staff'>
                            <Nav.Link>কর্মিবৃন্দ</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/about'>
                            <Nav.Link>সম্পর্কে</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/contact'>
                            <Nav.Link>যোগাযোগ</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
