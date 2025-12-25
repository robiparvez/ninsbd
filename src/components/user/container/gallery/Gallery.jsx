import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./lightbox-mobile.css";
import { Zoom, Slideshow, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import { One, OneThumb, Two, TwoThumb, Three, ThreeThumb, Four, FourThumb, Five, FiveThumb, Six, SixThumb, Seven, SevenThumb, Eight, EightThumb, Nine, NineThumb, Ten, TenThumb, Eleven, ElevenThumb, Twelve, TwelveThumb } from './Data';

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    const slides = [
        { src: One },
        { src: Two },
        { src: Three },
        { src: Four },
        { src: Five },
        { src: Six },
        { src: Seven },
        { src: Eight },
        { src: Nine },
        { src: Ten },
        { src: Eleven },
        { src: Twelve }
    ];
    return (
        <section id='gallary' style={{ backgroundColor: '#fff' }}>
            <Container fluid className='message-container' style={{ paddingLeft: '50px' }}>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            <strong style={{ color: 'brown' }}>গ্যালারি</strong>
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
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(0)}>
                            <img src={OneThumb} alt="Gallery 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(1)}>
                            <img src={TwoThumb} alt="Gallery 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(2)}>
                            <img src={ThreeThumb} alt="Gallery 3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(3)}>
                            <img src={FourThumb} alt="Gallery 4" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(4)}>
                            <img src={FiveThumb} alt="Gallery 5" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(5)}>
                            <img src={SixThumb} alt="Gallery 6" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(6)}>
                            <img src={SevenThumb} alt="Gallery 7" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(7)}>
                            <img src={EightThumb} alt="Gallery 8" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(8)}>
                            <img src={NineThumb} alt="Gallery 9" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(9)}>
                            <img src={TenThumb} alt="Gallery 10" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(10)}>
                            <img src={ElevenThumb} alt="Gallery 11" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }} onClick={() => setIndex(11)}>
                            <img src={TwelveThumb} alt="Gallery 12" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        </div>
                    </div>

                    <Lightbox
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={slides}
                        index={index}
                        plugins={[Zoom, Slideshow, Counter, Fullscreen]}
                        slideshow={{ delay: 3000 }}
                        zoom={{
                            maxZoomPixelRatio: 3,
                            scrollToZoom: true,
                            doubleClickDelay: 300,
                            doubleClickMaxStops: 2
                        }}
                        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                        carousel={{
                            finite: true,
                            preload: 2,
                            padding: "16px",
                            spacing: "30%",
                            imageFit: "contain"
                        }}
                        animation={{
                            fade: 300,
                            swipe: 300,
                            easing: "ease-out"
                        }}
                        controller={{
                            closeOnBackdropClick: true,
                            closeOnPullDown: true,
                            closeOnPullUp: false
                        }}
                    />
                </div>
            </Container>
        </section>
    );
}
