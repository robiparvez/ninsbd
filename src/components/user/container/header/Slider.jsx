import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { SLIDES } from 'src/components/user/Data';

export default function Slider() {
    return (
        <Container fluid style={{ height: 'calc(100vh - 77px)' }}>
            <Row className='max-height'>
                <Col xs={10} className='mx-auto div-col'>
                    <Carousel>
                        {SLIDES.map((slide, index) => (
                            <Carousel.Item key={index}>
                                <Image className='d-block w-100' src={slide.src} alt={slide.alt} fluid />
                                {slide.caption && (
                                    <Carousel.Caption className='text-left slide-in-top'>
                                        <h1>{slide.caption}</h1>
                                    </Carousel.Caption>
                                )}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}
