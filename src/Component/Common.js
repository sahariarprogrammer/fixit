import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Q from '../image/Q.jpg'

class Common extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                <div className="col-md-6 pt-lg-0 col-10 mx-auto order-2 order-lg-1 d-flex justify-content-center flex-column mt-3">
                                    <h1>{this.props.heading} <span className="brand-name"> FIX-IT</span></h1>
                                    <h2 className="my-3">{this.props.name} </h2>
                                    <h6>{this.props.description}</h6>
                                    <div className="mt-3">
                                          <NavLink to={this.props.visit} className="btn-get-started">{this.props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-8 order-1 order-lg-2 header-img mx-auto">
                                    <img src={this.props.imgsrc} className="img-fluid animated mt-sm-5 " alt="home image"/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Common;