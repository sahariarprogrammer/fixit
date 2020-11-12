import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <>
            <div className="container-fluid">
                <div className="row getconnected">
                    <div className="col-12 mx-auto getconnectedinside">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                                <h5>Get connected with us in social network</h5>
                            </div>
                            <div className="d-flex justify-content-end col-md-6 col-10 mx-auto icon-div">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
                            <FontAwesomeIcon icon={faYoutube} size="2x"  className="icon" />
                            <FontAwesomeIcon icon={faTwitter} size="2x"  className="icon"/>
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="icon"/>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mainfooter">
                    <div className="col-12 mx-auto ">
                        <div className="row my-3">
                            <div className="col-md-4 col-10 mx-auto">
                                <h2 className='footercompany' >FIX-IT</h2>
                                <p className="footercompanyinfo pt-2">Some text about company will be here.Some text about company will be here.Some text about company will be here.Some text about company will be here.Some text about company will be here. </p>
                            </div>
                            <div className="col-md-2 col-10 mx-auto icon-div">

                               
                            </div>  
                            <div className="col-md-4 col-10 mx-auto footerlinksdiv">
                                <h2 className="footerlinks">Links</h2>
                                <ul className="footerlinksul pt-2">
                                    <li><NavLink to="/service" className="footerlinksli">Software development</NavLink></li>
                                    <li><NavLink to="/service" className="footerlinksli">Artificial intelligence</NavLink></li>
                                    <li><NavLink to="/service" className="footerlinksli">Machine learning</NavLink></li>
                                    <li><NavLink to="/service" className="footerlinksli">Internet of things</NavLink></li>
                                </ul>
                               
                            </div>
                            <div className="col-md-2 col-10 mx-auto">
                                <h2 className="footercontact">Contact</h2>
                                <p className="pt-2">00000 /
                                 Downing street
                                London, UK</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Footer;