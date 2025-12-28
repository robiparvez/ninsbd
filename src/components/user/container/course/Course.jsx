import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import './course.css';
import { ADMISSION_ELIGIBILITY, BEHAVIOUR_RULES, BENEFITS, DOCS_AT_ADMISSION_TIME, DOCS_WITH_ADMISSION_FORM, INTRODUCTION } from './Data';

export default function Course() {
    const headingColCss = 'mx-auto px-lg-5 text-left mt-5';
    const titleTextUnderlineCss = { borderTop: '4px solid green', width: 50 };
    const subTextCssIntro = 'mt-3 text-muted w-100';
    const subTextCssOthers = 'mt-3 text-muted w-100 new-line';

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>কোর্স পরিচিতি ও ভর্তিতথ্য বিবরণী</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে-এর কোর্স পরিচিতি</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <div className={subTextCssIntro}>{parse(INTRODUCTION)}</div>
                    </Col>
                </Row>

                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>কোর্সের সুবিধা</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <p className={subTextCssOthers}>{BENEFITS}</p>
                    </Col>
                </Row>

                {/* <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>ফি সমূহ</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <div className={subTextCssIntro}>
                            <p>২০২১-২০২২ইং শিক্ষাবর্ষে ভর্তিচ্ছুক ছাত্র/ছাত্রীদের জন্য প্রদেয় ফি সমূহ (৩ বৎসরের জন্য)</p>
                            <p><b>ভর্তি ফি = ৪০,০০০/= টাকা</b></p>
                            <p><b>উন্নয়ন ফি = ৬৫,০০০/= টাকা</b></p>
                            <p><b>সেশন ফি = ৫০,০০০/= টাকা</b></p>
                            <p><b>টিউশন ফি = ৫৫,০০০/= টাকা</b></p>
                            <p><b>সর্বমোট = ২,১০,০০০/= টাকা</b></p>
                            <p>*মাসিক টিউশন ফি বাবদ ১৫০০/= টাকা এবং আবাসিক সুবিধা পেতে হোস্টেল ফি বাবন মাসিক ১০০০/- টাকা অগ্রিম পরিশোধ করতে হবে।</p>
                            <p>*এ ছাড়া পরীক্ষার ফিস, রেজিস্ট্রেশন ফিস অলাদ পরিশোধ করতে হবে।</p>
                        </div>
                    </Col>
                </Row> */}

                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>প্রশিক্ষণার্থীদের আচরণ বিধিমালা</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <p className={subTextCssOthers}>{BEHAVIOUR_RULES}</p>
                    </Col>
                </Row>

                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>(তিন) বৎসর মেয়াদী ডিপ্লোমা ইন নার্সিং সায়েন্স এন্ড মিডওয়াইফারি কোর্সে ভর্তির যোগ্যতা</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <p className={subTextCssOthers}>{ADMISSION_ELIGIBILITY}</p>
                    </Col>
                </Row>

                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right'>
                    <Col className={headingColCss}>
                        <h3>ভর্তি ফর্মের সাথে জমা দিতে হবে</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <p className={subTextCssOthers}>{DOCS_WITH_ADMISSION_FORM}</p>
                    </Col>
                </Row>

                <Row style={{ backgroundColor: '#fff' }} data-aos='fade-right' className='mb-5'>
                    <Col className={headingColCss}>
                        <h3>ভর্তির সময় জমা দিতে হবে</h3>
                        <div style={titleTextUnderlineCss}></div>
                        <p className={subTextCssOthers}>{DOCS_AT_ADMISSION_TIME}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
