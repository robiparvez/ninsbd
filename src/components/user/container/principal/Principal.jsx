import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import principal from 'src/components/user/images/principal/principal.jpg';
import { PRINCIPAL_QUOTE } from 'src/components/user/Data';
import './principal.css';

export default function Principal() {
    return (
        <section className='about' id='about' style={{ backgroundColor: '#fff' }}>
            <Container>
                <Row>
                    <Col xs={10} lg={8} md={6} className='mx-auto'>
                        <h1 className='text-capitalize'>
                            <strong className='banner-title'>অধ্যক্ষের বাণী</strong>
                        </h1>
                        <div className='my-4 text-muted w-100 about-text line-height new-line' style={{ lineHeight: '2rem', textAlign: 'justify' }} data-aos='fade-right'>
                            <div dangerouslySetInnerHTML={{ __html: PRINCIPAL_QUOTE }} />
                        </div>
                        <Link to='/about' className='btn btn-outline-primary text-uppercase learn-more' data-aos='fade-right'>
                            <span className='btn btn-link px-0' style={{ textDecoration: 'none' }}>
                                আরও জানুন
                            </span>
                            <span>
                                <i style={{ marginLeft: 10 }} className='fas fa-arrow-right'></i>
                            </span>
                        </Link>
                    </Col>
                    <Col xs={10} lg={4} md={6} className='mx-auto my-5 align-self-center' data-aos='fade-in'>
                        <div className='about-img_container'>
                            <Image src={principal} fluid />
                        </div>
                        <h4 className='my-4 text-muted w-100 about-text text-center' style={{ lineHeight: '2rem' }} data-aos='fade-in'>
                            অধ্যক্ষ
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
