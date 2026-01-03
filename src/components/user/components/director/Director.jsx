import { Col, Container, Row } from 'react-bootstrap';
import { DIRECTORS, GOVERNING_BODY } from 'src/components/user/Data';
import { useTeamRenderer } from 'src/hooks/useTeamRenderer';
import './director.css';

export default function Director() {
    const governingBodies = useTeamRenderer(GOVERNING_BODY);
    const directors = useTeamRenderer(DIRECTORS);

    return (
        <section>
            <Container style={{ backgroundColor: 'brown', color: '#fff' }} className='text-center py-5 aboutpage' fluid>
                <Row>
                    <Col>
                        <h1 style={{ color: 'white', fontWeight: 'bold' }}>পরিচালকগণ</h1>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5 mb-5'>
                <h3>বোর্ড অফ গভর্নিং বডি</h3>
                <hr />
                <Row>{governingBodies}</Row>

                <h3 className='mt-3'>বোর্ড অফ ডিরেক্টরস</h3>
                <hr />
                <Row>{directors}</Row>
            </Container>
        </section>
    );
}
