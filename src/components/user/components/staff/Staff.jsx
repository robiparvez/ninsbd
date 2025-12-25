import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { STAFFS } from './Data';
import './staff.css';

export default function Staff() {
    const staffs = STAFFS.map(staff => (
        <Col xs={12} sm={6} md={4} lg={4} key={staff.id}>
            <div className='our-team'>
                <div className='picture'>
                    <Image src={staff.image} fluid />
                </div>
                <div className='team-content'>
                    <h3 className='name'>{staff.name}</h3>
                    <h4 className='title'>{staff.position}</h4>
                    <h4 className='title'>{staff.qualification}</h4>
                </div>
            </div>
        </Col>
    ));

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>কর্মিবৃন্দ</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                <Row>{staffs}</Row>
            </Container>
        </section>
    );
}
