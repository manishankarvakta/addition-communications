import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className='text-start'><a href="/" className='nav-link'>All Rights Reserved &copy; 2022 Addition Communications </a></p>
                    </div>
                    <div className="col-md-6">
                        <ul class="nav pull-right justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://google.com"><i className="fab fa-google"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://Linkedin.com"><i className="fab fa-linkedin"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;