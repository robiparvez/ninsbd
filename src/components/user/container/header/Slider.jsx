import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import slide01 from '../../images/slides/slide-01.jpg';
import slide02 from '../../images/slides/slide-02.jpg';
import slide03 from '../../images/slides/slide-03.jpg';
import './header.css';

export default function Slider() {
    return (
        <Container fluid style={{ height: 'calc(100vh - 77px)' }}>
            <Row className='max-height'>
                <Col xs={10} className='mx-auto div-col'>
                    <Carousel>
                        <Carousel.Item>
                            <Image className='d-block w-100' src={slide01} alt='First slide' fluid />
                            <Carousel.Caption className='text-left slide-in-top'>
                                <h1>মাননীয় কাউন্সিল সদস্যদের পরিদর্শন</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='d-block w-100' src={slide02} alt='Second slide' fluid />
                            <Carousel.Caption className='text-left slide-in-top'>
                                <h1>খাদ্য মেলা ২০২২</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='d-block w-100' src={slide03} alt='Third slide' fluid />
                            <Carousel.Caption className='text-left slide-in-top'>
                                <h1>ভাষা শহীদের প্রতি শ্রদ্ধাজ্ঞাপন</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
