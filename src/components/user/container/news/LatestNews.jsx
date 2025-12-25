import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Slideshow, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import { Four, FourThumb, One, OneThumb, Three, ThreeThumb, Two, TwoThumb } from '../../components/notice/Data';
import './latest-news.css';

export default function LatestNews() {
    const [index, setIndex] = useState(-1);

    const slides = [
        { src: One, alt: '২০২১-২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি' },
        { src: Two, alt: 'ছাএ / ছাএীদের ইউনিফরমের বিবরনী' },
        { src: Three, alt: 'বিস্তৃত পরীক্ষার তারিখ' },
        { src: Four, alt: '২য় বর্ষের ক্লাস রুটিন-১' }
    ];
    return (
        <section id='gallary' className='pt-4' style={{ backgroundColor: '#fff' }} >
            <Container fluid className='message-container' style={{ paddingLeft: '50px' }}>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            সর্বশেষ <strong style={{ color: 'brown' }}>বিজ্ঞপ্তি</strong>
                        </h1>
                    </Col>
                </Row>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '15px',
                    padding: '20px 0'
                }}>
                    <div
                        style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                        onClick={() => setIndex(0)}
                    >
                        <img
                            alt='২০২১-২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি'
                            src={OneThumb}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                    <div
                        style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                        onClick={() => setIndex(1)}
                    >
                        <img
                            alt='ছাএ / ছাএীদের ইউনিফরমের বিবরনী'
                            src={TwoThumb}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                    <div
                        style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                        onClick={() => setIndex(2)}
                    >
                        <img
                            alt='বিস্তৃত পরীক্ষার তারিখ'
                            src={ThreeThumb}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                    <div
                        style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                        onClick={() => setIndex(3)}
                    >
                        <img
                            alt='২য় বর্ষের ক্লাস রুটিন-১'
                            src={FourThumb}
                            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={slides}
                    index={index}
                    plugins={[Zoom, Slideshow, Counter, Fullscreen]}
                    slideshow={{ delay: 3000 }}
                    zoom={{ maxZoomPixelRatio: 3 }}
                    counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                />

                <Row>
                    <Col className='mx-auto text-center'>
                        <Link to='/notice'>
                            <Button variant='danger' data-aos='zoom-in' style={{ margin: '20px 0', color: '#fff' }} className='btn-gallery'>আরো দেখুন</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
