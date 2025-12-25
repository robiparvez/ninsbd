import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { DIRECTORS, GOVERNING_BODY } from './Data';
import './director.css';

export default function Director() {
    const governingBodies = GOVERNING_BODY.map((governingBody, index) => (
        <Col xs={12} sm={6} md={4} lg={4} key={index + 1}>
            <div className='our-team'>
                <div className='picture'>
                    <Image src={governingBody.image} fluid />
                </div>
                <div className='team-content'>
                    <h3 className='name'>{governingBody.name}</h3>
                    <h4 className='title'>{governingBody.designation}</h4>
                </div>
            </div>
        </Col>
    ));

    const directors = DIRECTORS.map((director, index) => (
        <Col xs={12} sm={6} md={4} lg={4} key={index + 1}>
            <div className='our-team'>
                <div className='picture'>
                    <Image src={director.image} fluid />
                </div>
                <div className='team-content'>
                    <h3 className='name'>{director.name}</h3>
                    <h4 className='title'>{director.designation}</h4>
                </div>
            </div>
        </Col>
    ));

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>পরিচালকগণ</h1>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5 mb-5'>
                <h3>বোর্ড অফ গভর্নিং বডি</h3>
                <hr />
                <Row>{governingBodies}</Row>

                <h3 className='mt-3'>বোর্ড অফ ডিরেক্টরস</h3>
                <hr />
                <Row>{directors}</Row>
            </Container>
        </section>
    );
}
