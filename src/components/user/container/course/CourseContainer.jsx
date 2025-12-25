import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { INTRODUCTION } from './Data';
import parse from 'html-react-parser';

export default function CourseContainer() {
    const headingColCss = 'mx-auto px-lg-5 text-center mt-2';
    const titleTextUnderlineCss = { borderTop: '4px solid green', width: 50, margin: 'auto' };
    const subTextCss = 'mt-3 text-muted w-100';

    return (
        <section id='course' style={{ backgroundColor: '#fff' }}>
            <Container fluid>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            <strong style={{ color: 'brown' }}>কোর্স পরিচিতি ও ভর্তিতথ্য বিবরণী</strong>
                        </h1>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে-এর কোর্স পরিচিতি</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <div className={subTextCss}>{parse(INTRODUCTION)}</div>
                    </Col>
                </Row>
                <div className='text-center'>
                    <Link to='/course'>
                        <Button variant='danger' data-aos='zoom-in' style={{ margin: '20px 0', color: '#fff' }} className='btn-gallery'>আরো দেখুন</Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
