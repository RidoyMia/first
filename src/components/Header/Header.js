import React from 'react';
import { Link } from 'react-router-dom';
import Customlink from '../Customlingk/CustomLink';

const Header = () => {
    return (
        <div>
            <nav>
                <Customlink to="/home">home</Customlink>
               
                <Customlink to="/single">single</Customlink>
                
                <Customlink to="/about">About</Customlink>
            </nav>
        </div>
    );
};

export default Header;