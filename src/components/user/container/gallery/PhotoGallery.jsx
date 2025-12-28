import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./lightbox-mobile.css";
import { Zoom, Slideshow, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import { Four, FourThumb, One, OneThumb, Three, ThreeThumb, Two, TwoThumb } from './Data';
import { useLightbox } from '../../../../hooks/useLightbox';

export default function PhotoGallery() {
    const slides = [
        { src: One },
        { src: Two },
        { src: Three },
        { src: Four }
    ];

    const { index, isOpen, openLightbox, closeLightbox } = useLightbox(slides);
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

                <div className='mb-4'>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '15px',
                        padding: '20px 0'
                    }}>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => openLightbox(0)}
                        >
                            <img
                                src={OneThumb}
                                alt="Gallery 1"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => openLightbox(1)}
                        >
                            <img
                                src={TwoThumb}
                                alt="Gallery 2"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => openLightbox(2)}
                        >
                            <img
                                src={ThreeThumb}
                                alt="Gallery 3"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                        <div
                            style={{ cursor: 'pointer', borderRadius: '8px', overflow: 'hidden' }}
                            onClick={() => openLightbox(3)}
                        >
                            <img
                                src={FourThumb}
                                alt="Gallery 4"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <Lightbox
                        open={isOpen}
                        close={closeLightbox}
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

                    <Link to='/gallery'>
                        <div className='text-center'>
                            <Button variant='danger' data-aos='zoom-in' style={{ margin: '20px 0', color: '#fff' }} className='btn-gallery'>
                                আরো দেখুন
                            </Button>
                        </div>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
