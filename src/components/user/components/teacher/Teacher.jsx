import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { TEACHERS } from './Data';
import './teacher.css';

export default function Teacher() {
    const teachers = TEACHERS.map((teacher, index) => (
        <Col xs={12} sm={6} md={4} lg={4} key={index + 1}>
            <div className='our-team'>
                <div className='picture'>
                    <Image src={teacher.image} fluid />
                </div>
                <div className='team-content'>
                    <h3 className='name'>{teacher.name}</h3>
                    <h4 className='title'>{teacher.position}</h4>
                    <h4 className='title'>{teacher.qualification}</h4>
                </div>
            </div>
        </Col>
    ));

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>শিক্ষকবৃন্দ</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                {/* Teachers */}
                <Row>{teachers}</Row>
            </Container>
        </section>
    );
}
