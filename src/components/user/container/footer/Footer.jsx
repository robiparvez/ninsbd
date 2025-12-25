import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { INSTITUTE_NAME } from '../../Data';
import college from '../../images/logos/nins-logo-footer.png';
import { EMAIL_ADDRESS, FACEBOOK_LINK, LOCATION, PHONE_NUMBER } from './Data';
import './footer.css';
import MapContainer from './MapContainer';

export default function Footer() {
    return (
        <footer className='site-footer' id='contact' style={{ backgroundColor: '#fff' }}>
            <Container fluid>
                <Row>
                    <MapContainer />
                </Row>
                <Row>
                    <Col sm={6} md={6} data-aos='fade-right' className='mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap'>
                        <Link to='/'>
                            <Image src={college} fluid />
                        </Link>
                        <LinkContainer to='/'>
                            <h4 className='mt-3 text-center new-line'>{INSTITUTE_NAME}</h4>
                        </LinkContainer>
                    </Col>
                    <Col sm={6} md={6} data-aos='fade-left' className='d-flex mt-3 justify-content-start  flex-column flex-wrap'>
                        <h3 className='mb-2 text-capitalize text-start'>যোগাযোগ করুন</h3>
                        <div className='justify-content-start align-items-center flex-column' style={{ borderTop: '2px solid green', paddingTop: '0.5rem' }}>
                            <p className='d-flex flex-wrap'>
                                <span className='mr-4 footer-icon'>
                                    {/* <i className='fas fa-map'></i> */}
                                    <i className='fas fa-map-marker'></i>
                                </span>
                                <span className='new-line'>{LOCATION}</span>
                            </p>
                            <p className='d-flex flex-wrap'>
                                <span className='mr-4 footer-icon'>
                                    <i className='fas fa-phone'></i>
                                </span>
                                <span>{PHONE_NUMBER}</span>
                            </p>
                            <p className='d-flex flex-wrap'>
                                <span className='mr-4 footer-icon'>
                                    <i className='fas fa-envelope'></i>
                                </span>
                                {/* <span>{EMAIL_ADDRESS}</span> */}
                                <span>
                                    <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                                </span>
                            </p>
                            <p className='d-flex flex-wrap'>
                                <span className='mr-4 footer-icon'>
                                    <i className='fab fa-facebook'></i>
                                </span>
                                <span>
                                    <a className='facebook' href={FACEBOOK_LINK}>
                                        facebook.com/ninsrangpur
                                    </a>
                                </span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>
            <Container>
                <div className='container mb-2'>
                    <div className='row justify-content-center'>
                        <div className='col-6 text-left'>
                            <p className='copyright-text'>&copy; Copyright &amp; All Rights Reserved by "নর্দান ইন্‌স্টিটিউট অব নার্সিং সায়েন্স"</p>
                        </div>
                        <div className='col-6 text-right'>
                            <p className='copyright-text'>
                                <i className='fas fa-user-secret'></i>
                                <>&nbsp;</>Developed by{' '}
                                <a href='https://www.robiparvez.com' target='_blank'>
                                    {' '}
                                    Robiuzzaman Parvez
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
