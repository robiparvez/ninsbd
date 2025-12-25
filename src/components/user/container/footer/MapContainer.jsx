import React from 'react';
import './map.css';

export default function MapContainer() {
    return (
        <div className='map'>
            {/* <div className='google-map' style={{ width: '100vw', height: '50vh' }}> */}
            <div className='google-map'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.057402013186!2d89.2316019150211!3d25.76866748363359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e331ee96afd57f%3A0x190411f7d546c751!2z4Kao4Kaw4KeN4Kam4Ka-4KaoIOCmquCnjeCmsOCmvuCmh-CmreCnh-CmnyDgpq7gp4fgpqHgpr_gppXgp4fgprIg4KaV4Kay4KeH4KacIOCmkyDgprngpr7gprjgpqrgpr7gpqTgpr7gprI!5e0!3m2!1sen!2sbd!4v1648129994771!5m2!1sen!2sbd' width='1400' height='500' frameBorder='0' style={{ border: 0 }} allowFullScreen='' aria-hidden='false' tabIndex='0' loading='lazy' title='Northern Institue of Nursing Science' />
            </div>
        </div>
    );
}
