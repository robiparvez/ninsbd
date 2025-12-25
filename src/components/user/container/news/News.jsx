import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LatestNews from './LatestNews';
import './news.css';

const News = () => {
    const marqueeRef = useRef();

    const MESSAGE_ONE = '(তিন) বৎসর মেয়াদী ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে ২০২১-২২ শিক্ষাবর্ষে ভর্তি আবেদন শুরু হয়েছে';
    const MESSAGE_TWO = 'নর্দান ইনস্টিটিউট অব নার্সিং সায়েন্স রংপুর থেকে ভাষা শহীদের প্রতি শ্রদ্ধা জ্ঞাপন';
    const MESSAGE_THREE = 'খাদ্য মেলা ২০২২ উপলক্ষে অনুষ্ঠান';
    const MESSAGE_FOUR = 'ছাএ / ছাএীদের ইউনিফরমের বিবরনী';

    return (
        <section id='messages'>
            <Container fluid className='message-container my-3'>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            সর্বশেষ <strong style={{ color: 'brown' }}>আপডেট</strong>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <div className='latest-news'>
                            <marquee
                                ref={marqueeRef}
                                onMouseEnter={() => marqueeRef.current && marqueeRef.current.stop()}
                                onMouseLeave={() => marqueeRef.current && marqueeRef.current.start()}
                            >
                                <p>
                                    <a href='#' className='marq-a'>
                                        {MESSAGE_ONE}
                                    </a>
                                    <i className='fas fa-certificate' style={{ marginRight: '2rem', marginLeft: '10px' }}></i>

                                    <a href='#' className='marq-a'>
                                        {MESSAGE_TWO}
                                    </a>
                                    <i className='fas fa-certificate' style={{ marginRight: '2rem', marginLeft: '10px' }}></i>

                                    <a href='#' className='marq-a'>
                                        {MESSAGE_THREE}
                                    </a>
                                    <i className='fas fa-certificate' style={{ marginRight: '2rem', marginLeft: '10px' }}></i>

                                    <a href='#' className='marq-a'>
                                        {MESSAGE_FOUR}
                                    </a>
                                    <i className='fas fa-certificate' style={{ marginRight: '2rem', marginLeft: '10px' }}></i>
                                </p>
                            </marquee>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* LATEST NOTICES */}
            <LatestNews />
        </section>
    );
};

export default News;
