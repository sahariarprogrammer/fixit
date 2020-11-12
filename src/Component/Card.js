import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Card extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <>
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card">
                                    <img src={this.props.cardimage} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                         <h5 className="card-title">{this.props.cardtitle}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to={this.props.cardlink} className="btn btn-primary">Learn more</NavLink>
                                    </div>
                            </div>
                        </div>
            </>
        );
    }
}

export default Card;