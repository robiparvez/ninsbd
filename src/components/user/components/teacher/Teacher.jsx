import { Col, Container, Row } from 'react-bootstrap';
import { TEACHERS } from 'src/components/user/Data';
import { useTeamRenderer } from 'src/hooks/useTeamRenderer';
import blankProfilePicture from 'src/components/user/images/teachers/blank-profile-picture.png';
import './teacher.css';

export default function Teacher() {
    const getAnimationClass = (teacher) => teacher.image === blankProfilePicture ? 'no-animation' : '';
    const teachers = useTeamRenderer(TEACHERS, getAnimationClass);

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>শিক্ষকবৃন্দ</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                <Row>{teachers}</Row>
            </Container>
        </section>
    );
}
