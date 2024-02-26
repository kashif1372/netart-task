import React from 'react';
import phone from '../assets/phone.png';
import globe from '../assets/globe.png';
import fb from '../assets/fb.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='div'>
                <div>
                    <img alt='' src={phone} />
                </div>
                <span>Toll free 1800 200 1234</span>
            </div>
            <div className='div'>
                <div>
                    <img alt='' src={fb} />
                </div>
                <a href='https://www.facebook.com/cripumps'><span>www.facebook.com/cripumps</span></a>
            </div>
            <div className='div'>
                <div>
                    <img alt='' src={globe} />
                </div>
                <a href='https://www.crigroups.com'><span>www.crigroups.com</span></a>
            </div>
        </div>
    );
}
 
export default Footer;