import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = ({ postDate }) => (
    <Row className="bg-dark text-light pt-3 pb-1 px-3">
        <Col>
            <p>Astronomy Picture of the Day ~ <strong>{postDate}</strong></p>
        </Col>
    </Row>
);

export default Footer;