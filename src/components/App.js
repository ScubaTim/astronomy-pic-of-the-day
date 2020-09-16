import React from 'react';
import Toolbar from './Toolbar';
import MainCard from './MainCard';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
`

const App = () => {
    return (
        <AppContainer className="bg-dark">
            <Toolbar />
            <Container fluid>
                <Row>
                    <Col>
                        <MainCard />
                    </Col>
                </Row>
            </Container>
        </AppContainer>
    )
};

export default App;