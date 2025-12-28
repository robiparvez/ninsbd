import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutPic from '../../images/cover/nins-cover-original.png';
import { AIM_OBJECTIVES, CHARACTERISTICS } from './Data';
import SEO from 'src/SEO/SEO';
import { pageSEO } from 'src/SEO/seoConfig';
import { breadcrumbSchema } from 'src/SEO/schemas';

const About = () => {
    const breadcrumbs = breadcrumbSchema([
        { name: 'Home', url: 'https://www.ninsbd.com/' },
        { name: 'About', url: 'https://www.ninsbd.com/about' }
    ]);

    return (
        <section>
            <SEO
                title={pageSEO.about.title}
                description={pageSEO.about.description}
                keywords={pageSEO.about.keywords}
                canonicalUrl={pageSEO.about.canonicalUrl}
                structuredData={breadcrumbs}
            />
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>আমাদের সম্পর্কে</h1>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                <Col className='mx-auto px-lg-5 text-left mt-5'>
                    <h1>লক্ষ্য ও উদ্দেশ্য</h1>
                    <div style={{ borderTop: '4px solid green', width: 50 }}></div>
                    <p className='mt-3 text-muted w-100 new-line'>{AIM_OBJECTIVES}</p>
                </Col>
            </Row>
            {/* <Row style={{ backgroundColor: '#E0E0E0', color: 'white' }}> */}
            <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                <Col xs={10} lg={8} md={6} className='mx-auto px-lg-5 my-5'>
                    <h1 className='text-capitalize'>
                        <strong className='banner-title'>আমাদের বৈশিষ্ট্য</strong>
                    </h1>
                    <div style={{ borderTop: '4px solid green', width: 50 }}></div>
                    <p className='my-4 text-muted w-100 about-text new-line'>
                        {CHARACTERISTICS}
                    </p>
                </Col>
                <Col xs={10} lg={4} md={6} className='mx-auto px-lg-5 my-5 align-self-center' data-aos='fade-in'>
                    <div className='about-img_container'>
                        <Image src={aboutPic} fluid style={{ border: '1px solid brown', padding: '5px' }} />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
};

export default React.memo(About);
