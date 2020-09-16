import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const MainCard = ({ title, apodImage, description }) => {

    return (
        <Container className="pb-5" >
            <h1 className="mt-5 font-weight-bold">{title}</h1>
            <hr className="mb-4" />
            <Row>
                <Col>
                    <img className="rounded-top" src={apodImage} width="100%" alt="APOD" />
                    <p className="bg-dark text-white pt-3 pb-4 px-4 rounded-bottom" style={{ fontFamily: 'Open Sans', lineHeight: '1.75' }}>{description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MainCard;