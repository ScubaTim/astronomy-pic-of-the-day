import React from 'react';

const Footer = ({ postDate }) => (
    <div className="bg-dark text-light pt-3 pb-1 px-3">
        <p>Astronomy Picture of the Day - <strong>{postDate}</strong></p>
    </div>
);

export default Footer;