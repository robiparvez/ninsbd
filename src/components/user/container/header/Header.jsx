import React from 'react';
import Slider from './Slider';
import Topbar from './Topbar';

const Header = () => {
    return (
        <header id='home' className='header-styles'>
            <Topbar />
            <Slider />
        </header>
    );
};

export default Header;
