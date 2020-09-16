import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Toolbar = () => {
    return (
        <Navbar className="bg-secondary" dark>
            <NavbarBrand className="mx-auto">
                <h2>Astronomy Picture Of The Day</h2>
            </NavbarBrand>
        </Navbar>
    )
}

export default Toolbar;