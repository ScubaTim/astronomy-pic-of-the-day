import React from 'react';
import Toolbar from './Toolbar';
import { Container, Row, Col } from 'reactstrap';

const App = () => {
    return (
        <div className="bg-dark text-white">
            <Toolbar />
            <Container>
                <Row>
                    <Col>
                        <p>Oh Hi bitch</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default App;