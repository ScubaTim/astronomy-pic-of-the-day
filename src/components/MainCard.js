import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardBody } from 'reactstrap';

const MainCard = () => {
    const [title, setTitle] = useState('')


    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=atz7vXae76rgL7iMaPVW97NfVmq0XOHi7SSUBrDh')
            .then((req, res) => {
                const apod = req.data
                setTitle(apod.title)
            });

    }, []);


    return (
        <>
            <Row>
                <Col className="text-white">
                    <h1>{title}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={{ padding: "200px 0" }}>Image</p>
                </Col>
            </Row>
            <Row>
                <Col className="mx-auto my-5">
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius mollis bibendum. Phasellus malesuada fringilla aliquet. Sed at dui leo. Phasellus massa eros, accumsan eget volutpat eu, elementum ultricies lectus. Ut finibus mauris lectus, in tincidunt mauris varius quis. Suspendisse auctor in mi a tempor. Pellentesque sit amet sagittis lectus. Duis sed imperdiet lectus. Nullam tempor eget urna at maximus. Fusce ornare eu odio ac maximus. Nulla in libero felis. Aliquam in ultricies dolor, nec mollis lectus. Mauris eleifend sapien in tellus mattis, id pulvinar nisi tristique. Fusce eleifend turpis dolor, ullamcorper ullamcorper erat malesuada nec. Nullam et ornare mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </CardBody>
                    </Card>
                </Col>
            </Row>
        </>

    )
}

export default MainCard;