import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Toolbar from './Toolbar';
import MainCard from './MainCard';
import Footer from './Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
    margin: 0;
    padding: 0;
`

const App = () => {
    const [title, setTitle] = useState('')
    const [apodImage, setApodImage] = useState('')
    const [description, setDescription] = useState('')
    const [postDate, setPostDate] = useState('')

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=atz7vXae76rgL7iMaPVW97NfVmq0XOHi7SSUBrDh')
            .then((req, res) => {
                const apod = req.data
                console.log(req.data);
                setTitle(apod.title)
                setApodImage(apod.hdurl)
                setDescription(apod.explanation)
                setPostDate(apod.date)
            });
    }, []);

    return (
        <AppContainer className="bg-secondary">
            <Toolbar />
            <MainCard
                title={title}
                apodImage={apodImage}
                description={description}
            />
            <Footer postDate={postDate} />
        </AppContainer >
    )
};

export default App;