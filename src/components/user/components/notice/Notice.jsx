import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './notice.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Slideshow, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import { One, OneThumb, Two, TwoThumb, Three, ThreeThumb, Four, FourThumb, Five, FiveThumb, Six, SixThumb, Seven, SevenThumb, Eight, EightThumb } from './Data';

export default function Notice() {
    const [index, setIndex] = useState(-1);

    const slides = [
        { src: One, alt: '২০২১-২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি' },
        { src: Two, alt: 'ছাএ / ছাএীদের ইউনিফরমের বিবরনী' },
        { src: Three, alt: 'বিস্তৃত পরীক্ষার তারিখ' },
        { src: Four, alt: '২য় বর্ষের ক্লাস রুটিন-১' },
        { src: Five, alt: '২য় বর্ষের ক্লাস রুটিন-২' },
        { src: Six, alt: '২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-১' },
        { src: Seven, alt: '২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-2' },
        { src: Eight, alt: 'অনলাইনে পুনরায় ক্লাস শুরু করা প্রসঙ্গে' }
    ];
    return (
        <section id='gallary' style={{ backgroundColor: '#fff' }}>
            <Container fluid className='message-container' style={{ paddingLeft: '50px' }}>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            <strong style={{ color: 'brown' }}>বিজ্ঞপ্তি</strong>
                        </h1>
                    </Col>
                </Row>
                <div className='mb-5'>
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
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => setIndex(4)}
                        >
                            <img
                                alt='২য় বর্ষের ক্লাস রুটিন-২'
                                src={FiveThumb}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => setIndex(5)}
                        >
                            <img
                                alt='২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-১'
                                src={SixThumb}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => setIndex(6)}
                        >
                            <img
                                alt='২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-2'
                                src={SevenThumb}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => setIndex(7)}
                        >
                            <img
                                alt='অনলাইনে পুনরায় ক্লাস শুরু করা প্রসঙ্গে'
                                src={EightThumb}
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
                </div>
            </Container>
        </section>
    );
}
