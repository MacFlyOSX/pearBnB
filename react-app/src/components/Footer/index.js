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
                    <span className='pearbnb-footer'>
                    © 2022 Pearbnb, Inc.
                    </span>
                    <span className='middot'>&middot;</span>
                    <span className='brandon-span'>
                        <a className='footer-tag' href='https://www.linkedin.com/in/brandon-tasaki/' rel="noopener noreferrer" target='_blank'>Brandon Tasaki</a>
                    </span>
                    <span className='middot'>&middot;</span>
                    <span className='repo-span'>
                        <a className='footer-tag' href='https://github.com/MacFlyOSX/pearBnB' rel="noopener noreferrer" target='_blank'>Site Repo</a>
                    </span>
                </div>
                <div className='hpfooter-right'>
                    <a href='https://github.com/MacFlyOSX/' rel="noopener noreferrer" target='_blank'>
                    <div className='github'>
                        <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id='github-path' fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"
                        // fill="#1B1F23"
                        />
                        </svg>
                        <span className='footer-tag github-span'>
                            Github
                        </span>
                    </div>
                    </a>
                    <a href='https://www.linkedin.com/in/brandon-tasaki/' rel="noopener noreferrer" target='_blank'>
                    <div className='linkedin'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="20px" height="20px" viewBox="0 0 2361.000000 2361.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g id='linkedin-g' transform="translate(0.000000,2361.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M11185 23600 c-1495 -89 -2818 -404 -4150 -987 -223 -98 -727 -347
                        -935 -464 -1840 -1026 -3360 -2493 -4422 -4264 -324 -541 -601 -1096 -828
                        -1660 -473 -1173 -730 -2304 -832 -3660 -18 -231 -18 -1289 0 -1520 51 -674
                        124 -1199 246 -1758 211 -965 517 -1835 956 -2722 239 -483 460 -864 760
                        -1314 1133 -1697 2683 -3071 4500 -3990 1319 -667 2767 -1083 4230 -1215 405
                        -37 512 -41 1095 -41 583 0 690 4 1095 41 2962 267 5735 1669 7728 3908 575
                        645 1087 1368 1521 2146 117 208 366 712 464 935 518 1183 838 2419 951 3675
                        37 405 41 512 41 1095 0 583 -4 690 -41 1095 -113 1256 -433 2492 -951 3675
                        -97 222 -347 726 -464 935 -934 1676 -2214 3068 -3790 4120 -1239 827 -2581
                        1398 -4036 1716 -553 120 -1060 192 -1738 245 -174 14 -1210 20 -1400 9z
                        m-4804 -4411 c435 -44 851 -252 1144 -572 630 -688 645 -1709 36 -2422 -356
                        -418 -949 -665 -1477 -616 -324 29 -613 129 -861 297 -460 312 -742 781 -802
                        1336 -35 315 28 660 174 964 326 675 1053 1088 1786 1013z m9744 -4648 c483
                        -58 869 -168 1246 -357 1020 -510 1642 -1510 1783 -2869 35 -331 36 -471 36
                        -3687 l0 -3208 -1515 0 -1515 0 -3 2788 c-3 3013 0 2819 -53 3127 -70 408
                        -219 756 -432 1000 -309 357 -791 517 -1397 464 -904 -77 -1469 -659 -1609
                        -1654 -35 -245 -36 -327 -36 -3027 l0 -2698 -1460 0 -1460 0 0 4925 0 4925
                        1460 0 1460 0 0 -655 c0 -518 3 -655 13 -654 6 0 40 44 74 97 182 285 531 643
                        848 869 488 348 1068 566 1655 622 63 6 133 13 155 15 109 11 589 -4 750 -23z
                        m-8375 -5196 l0 -4925 -1522 2 -1523 3 -3 4910 c-1 2701 0 4916 3 4923 3 9
                        318 12 1525 12 l1520 0 0 -4925z"/>
                        </g>
                        </svg>
                        <span className='footer-tag linkedin-span'>
                            Linkedin
                        </span>
                    </div>
                    </a>
                </div>
            </div>
        )
    } else {
        footerCode = (
            <div className='footer-otherpages'>
                <div className='footer-top-icons'>
                    <a href='https://github.com/MacFlyOSX/' rel="noopener noreferrer" target='_blank'>
                        <div className='github'>
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id='github-path' fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
                        </svg>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/brandon-tasaki/' rel="noopener noreferrer" target='_blank'>
                        <div className='linkedin'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="25px" height="25px" viewBox="0 0 2361.000000 2361.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g id='linkedin-g' transform="translate(0.000000,2361.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M11185 23600 c-1495 -89 -2818 -404 -4150 -987 -223 -98 -727 -347
                        -935 -464 -1840 -1026 -3360 -2493 -4422 -4264 -324 -541 -601 -1096 -828
                        -1660 -473 -1173 -730 -2304 -832 -3660 -18 -231 -18 -1289 0 -1520 51 -674
                        124 -1199 246 -1758 211 -965 517 -1835 956 -2722 239 -483 460 -864 760
                        -1314 1133 -1697 2683 -3071 4500 -3990 1319 -667 2767 -1083 4230 -1215 405
                        -37 512 -41 1095 -41 583 0 690 4 1095 41 2962 267 5735 1669 7728 3908 575
                        645 1087 1368 1521 2146 117 208 366 712 464 935 518 1183 838 2419 951 3675
                        37 405 41 512 41 1095 0 583 -4 690 -41 1095 -113 1256 -433 2492 -951 3675
                        -97 222 -347 726 -464 935 -934 1676 -2214 3068 -3790 4120 -1239 827 -2581
                        1398 -4036 1716 -553 120 -1060 192 -1738 245 -174 14 -1210 20 -1400 9z
                        m-4804 -4411 c435 -44 851 -252 1144 -572 630 -688 645 -1709 36 -2422 -356
                        -418 -949 -665 -1477 -616 -324 29 -613 129 -861 297 -460 312 -742 781 -802
                        1336 -35 315 28 660 174 964 326 675 1053 1088 1786 1013z m9744 -4648 c483
                        -58 869 -168 1246 -357 1020 -510 1642 -1510 1783 -2869 35 -331 36 -471 36
                        -3687 l0 -3208 -1515 0 -1515 0 -3 2788 c-3 3013 0 2819 -53 3127 -70 408
                        -219 756 -432 1000 -309 357 -791 517 -1397 464 -904 -77 -1469 -659 -1609
                        -1654 -35 -245 -36 -327 -36 -3027 l0 -2698 -1460 0 -1460 0 0 4925 0 4925
                        1460 0 1460 0 0 -655 c0 -518 3 -655 13 -654 6 0 40 44 74 97 182 285 531 643
                        848 869 488 348 1068 566 1655 622 63 6 133 13 155 15 109 11 589 -4 750 -23z
                        m-8375 -5196 l0 -4925 -1522 2 -1523 3 -3 4910 c-1 2701 0 4916 3 4923 3 9
                        318 12 1525 12 l1520 0 0 -4925z"/>
                        </g>
                        </svg>
                        </div>
                    </a>
                </div>
                <div className='footer-bottom-cp'>
                    © 2022 Pearbnb, Inc.
                </div>
                <div className='footer-bottom-brandon'>
                    <span className='brandon-span'>
                        <a className='footer-tag' href='https://www.linkedin.com/in/brandon-tasaki/' rel="noopener noreferrer" target='_blank'>Brandon Tasaki</a>
                    </span>
                    <span className='middot'>&middot;</span>
                    <span className='repo-span'>
                        <a className='footer-tag' href='https://github.com/MacFlyOSX/pearBnB' rel="noopener noreferrer" target='_blank'>Site Repo</a>
                    </span>
                </div>
            </div>
        )
    }

  return (
        <>
            {footerCode}
        </>
  )
}

export default Footer;
