import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Toolbar = () => {
    return (
        <Navbar className="bg-dark" >
            <NavbarBrand className="mx-auto text-white" style={{ fontFamily: 'Audiowide' }}>
                Astronomy Picture Of The Day
            </NavbarBrand>
        </Navbar>
    )
}

export default Toolbar;