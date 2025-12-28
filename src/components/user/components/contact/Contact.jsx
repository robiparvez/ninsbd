import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './contact.css';
import { HELP_TEXT, EMAIL_ADDRESS, FACEBOOK_LINK, LOCATION, PHONE_NUMBER } from '../../container/footer/Data';
import { useContactForm } from '../../../../hooks/useContactForm';
import SEO from 'src/SEO/SEO';
import { pageSEO } from 'src/SEO/seoConfig';
import { localBusinessSchema, breadcrumbSchema } from 'src/SEO/schemas';

export default function Contact() {
    const {
        formRef,
        buttonRef,
        done,
        isSubmitting,
        register,
        errors,
        handleSubmit
    } = useContactForm();

    const breadcrumbs = breadcrumbSchema([
        { name: 'Home', url: 'https://www.ninsbd.com/' },
        { name: 'Contact', url: 'https://www.ninsbd.com/contact' }
    ]);

    const combinedSchema = {
        '@context': 'https://schema.org',
        '@graph': [localBusinessSchema, breadcrumbs]
    };

    return (
        <section>
            <SEO
                title={pageSEO.contact.title}
                description={pageSEO.contact.description}
                keywords={pageSEO.contact.keywords}
                canonicalUrl={pageSEO.contact.canonicalUrl}
                structuredData={combinedSchema}
            />
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>যোগাযোগ</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='pt-5 pb-5' style={{ backgroundColor: '#fff' }}>
                <Row>
                    <Col lg={8} md={6} className='mx-3'>
                        <h1>যোগাযোগ করুন</h1>
                        <hr />
                        <p>{HELP_TEXT}</p>

                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <Row className='mb-3'>
                                <Form.Group as={Col} controlId='formGridName'>
                                    <Form.Label>নাম</Form.Label>
                                    <Form.Control type='text' name='name' placeholder='আপনার নাম লিখুন' {...register('name', { required: true })} />
                                    {errors.name?.type === 'required' && <span className='text-danger'>নাম আবশ্যক</span>}
                                </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} controlId='formGridSubject'>
                                    <Form.Label>বিষয়</Form.Label>
                                    <Form.Control type='text' name='subject' placeholder='বিষয় লিখুন' {...register('subject', { required: true })} />
                                    {errors.subject?.type === 'required' && <span className='text-danger'>বিষয় আবশ্যক</span>}
                                </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} controlId='formGridEmail'>
                                    <Form.Label>ইমেইল</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='email'
                                        placeholder='ইমেইল প্রদান করুন'
                                        {...register('email', {
                                            required: 'ইমেইল আবশ্যক',
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'ইমেইল ফরমেট ভুল'
                                            }
                                        })}
                                    />
                                    {errors.email?.type === 'required' && <span className='text-danger'>ইমেইল আবশ্যক</span>}
                                    {errors.email?.type === 'pattern' && <span className='text-danger'>ইমেইল ফরমেট ভুল</span>}
                                </Form.Group>
                            </Row>

                            <Row className='mb-3'>
                                <Form.Group as={Col} controlId='formGridMessage'>
                                    <Form.Label>বার্তা</Form.Label>
                                    <Form.Control as='textarea' name='message' rows={3} placeholder='আপনার বার্তা লিখুন' {...register('message', { required: true })} />
                                    {errors.message?.type === 'required' && <span className='text-danger'>বার্তা আবশ্যক</span>}
                                </Form.Group>
                            </Row>

                            <Button variant='primary' type='submit' ref={buttonRef} disabled={isSubmitting}>
                                {isSubmitting ? 'পাঠানো হচ্ছে...' : 'জমা দিন'}
                            </Button>
                            {done && (
                                <span className='thanks-text' id='thanks-text'>
                                    ধন্যবাদ, বার্তা পাঠানো হয়েছে।
                                </span>
                            )}
                        </Form>

                        <div className="mt-4 p-3 bg-light rounded">
                            <h5>বিকল্প যোগাযোগ:</h5>
                            <p>যদি ফর্মটি কাজ না করে, তাহলে সরাসরি যোগাযোগ করুন:</p>
                            <p><strong>ইমেইল:</strong> <a href="mailto:ninsrangpur97@gmail.com">ninsrangpur97@gmail.com</a></p>
                            <p><strong>ফোন:</strong> <a href="tel:+8801720437397">+8801720437397</a></p>
                        </div>
                    </Col>

                    <Col lg={3} md={6} className='mx-3 mt-5 mt-lg-3'>
                        <h3>সামাজিক মাধ্যম</h3>
                        <hr />
                        <div>
                            <p>
                                <span>
                                    <i className='fab fa-facebook' style={{ marginRight: 15, color: 'dodgerblue' }}></i>
                                </span>
                                <span>
                                    <a className='facebook' href={FACEBOOK_LINK}>
                                        facebook.com/ninsrangpur
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h3>ফোন</h3>
                            <hr />
                            <p>
                                <span>
                                    <i className='fas fa-phone' style={{ marginRight: 15, color: 'dodgerblue' }}></i>
                                </span>
                                {PHONE_NUMBER}
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h3>ইমেইল</h3>
                            <hr />
                            <p>
                                <span>
                                    <i className='fas fa-envelope' style={{ marginRight: 15, color: 'mediumpurple' }}></i>
                                </span>
                                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                            </p>
                        </div>
                        <div className='mt-5'>
                            <h3>ঠিকানা</h3>
                            <hr />
                            <p>
                                <span>
                                    <i className='fas fa-map-marker' style={{ marginRight: 15, color: 'darkorange' }}></i>
                                </span>
                                {LOCATION}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
