import { Col, Container, Row } from 'react-bootstrap';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Zoom, Slideshow, Counter, Fullscreen, Video } from 'yet-another-react-lightbox/plugins';
import { useLightbox } from 'src/hooks/useLightbox';
import { useImageGrid } from 'src/hooks/useImageGrid.jsx';
import { useGallery } from 'src/hooks/useGallery';
import './lightbox-mobile.css';

export default function Gallery() {
    const { index, isOpen, openLightbox, closeLightbox } = useLightbox();
    const { mediaItems, slides, lightboxConfig } = useGallery();
    const { renderGrid } = useImageGrid(mediaItems);

    // Debug: Log video configuration
    if (import.meta.env.DEV) {
        console.log('Gallery mediaItems:', mediaItems.filter(item => item.type === 'video'));
        console.log('Gallery slides:', slides.filter(slide => slide.type === 'video'));
    }

    return (
        <section id="gallary" style={{ backgroundColor: '#fff' }}>
            <Container fluid className="message-container" style={{ paddingLeft: '50px' }}>
                <Row>
                    <Col className="mx-auto my-3 text-center text-capitalize">
                        <h1>
                            <strong style={{ color: 'brown' }}>গ্যালারি</strong>
                        </h1>
                    </Col>
                </Row>
                <div className="mb-5">
                    {renderGrid(openLightbox)}

                    <Lightbox
                        open={isOpen}
                        close={closeLightbox}
                        slides={slides}
                        index={index}
                        plugins={[Zoom, Slideshow, Counter, Fullscreen, Video]}
                        slideshow={lightboxConfig.slideshow}
                        zoom={lightboxConfig.zoom}
                        counter={lightboxConfig.counter}
                        carousel={lightboxConfig.carousel}
                        animation={lightboxConfig.animation}
                        controller={lightboxConfig.controller}
                        video={lightboxConfig.video}
                    />
                </div>
            </Container>
        </section>
    );
}
