import { Col, Container, Row } from 'react-bootstrap';
import { STAFFS } from 'src/components/user/Data';
import { useTeamRenderer } from 'src/hooks/useTeamRenderer';
import './staff.css';

export default function Staff() {
    const staffs = useTeamRenderer(STAFFS);

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>কর্মিবৃন্দ</h1>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                <Row>{staffs}</Row>
            </Container>
        </section>
    );
}
