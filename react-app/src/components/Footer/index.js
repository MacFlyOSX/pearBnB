import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const url = useLocation().pathname;

    let footerCode;

    if (url === '/') {
        footerCode = (
            <div className='footer-homepage'>
                <div className='hpfooter-left'>
                    © 2022 Pearbnb, Inc. &middot; Brandon Tasaki
                </div>
                <div className='hpfooter-right'>

                </div>
            </div>
        )
    }

  return (
    <div>

    </div>
  )
}

export default Footer;
