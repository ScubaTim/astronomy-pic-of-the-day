import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Toolbar = () => {
    return (
        <Navbar dark >
            <NavbarBrand className="mx-auto text-white">
                <h2>Astronomy Picture Of The Day</h2>
            </NavbarBrand>
        </Navbar>
    )
}

export default Toolbar;