import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import chairman from '../../images/chairman/chairman.png';
import { CHAIRMAN_QUOTE } from './Data';
import './chairman.css';

export default function Chairman() {
    const navigate = useNavigate();

    return (
        <section className='about' id='about' style={{ backgroundColor: '#fff' }}>
            <Container>
                <Row>
                    <Col xs={10} lg={8} md={6} className='mx-auto'>
                        <h1 className='text-capitalize'>
                            <strong className='banner-title'>চেয়ারম্যানের বাণী</strong>
                        </h1>
                        <div className='my-4 text-muted w-100 about-text line-height new-line' style={{ lineHeight: '2rem', textAlign: 'justify' }} data-aos='fade-right'>
                            <div dangerouslySetInnerHTML={{ __html: CHAIRMAN_QUOTE }} />
                        </div>
                        <Link to='/about' className='btn btn-outline-primary text-uppercase learn-more' data-aos='fade-right'>
                            <button
                                style={{ textDecoration: 'none' }}
                                className='btn btn-link px-0'
                                onClick={e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    navigate('/about');
                                }}>
                                আরও জানুন
                            </button>
                            <span>
                                <i style={{ marginLeft: 10 }} className='fas fa-arrow-right'></i>
                            </span>
                        </Link>
                    </Col>
                    <Col xs={10} lg={4} md={6} className='mx-auto my-5 align-self-center' data-aos='fade-in'>
                        <div className='about-img_container'>
                            <Image src={chairman} fluid />
                        </div>
                        <h4 className='my-4 text-muted w-100 about-text text-center' style={{ lineHeight: '2rem' }} data-aos='fade-in'>
                            চেয়ারম্যান
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
