import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardBody } from 'reactstrap';

const MainCard = () => {
    const [title, setTitle] = useState('')
    const [apodImage, setApodImage] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=atz7vXae76rgL7iMaPVW97NfVmq0XOHi7SSUBrDh')
            .then((req, res) => {
                const apod = req.data
                console.log(req.data);
                setTitle(apod.title)
                setApodImage(apod.hdurl)
                setDescription(apod.explanation)
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
                    <img src={apodImage} alt="APOD" />
                </Col>
            </Row>
            <Row>
                <Col className="mx-auto my-5">
                    <Card>
                        <CardBody>
                            {description}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>

    )
}

export default MainCard;