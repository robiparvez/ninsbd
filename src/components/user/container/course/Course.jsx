import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import { ADMISSION_ELIGIBILITY, BEHAVIOUR_RULES, BENEFITS, DOCS_AT_ADMISSION_TIME, DOCS_WITH_ADMISSION_FORM, INTRODUCTION } from 'src/components/user/Data';
import { useCourseStyles } from 'src/hooks/useCourseStyles';
import './course.css';

export default function Course() {
    const { headingColCss, titleTextUnderlineCss, subTextCssIntro, subTextCssOthers } = useCourseStyles();

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
