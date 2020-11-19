import React, { Component } from 'react';
import Card from './Card'
import Data from './Data'

class Service extends Component {
    render() {
        return (
            <>
            <div className="my-5">
                <h1 className="text-center">Our services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Data.map((val,ind)=>{
                                    return <Card
                                        cardtitle={val.title}
                                        cardimage={val.imgsrc}
                                        cardlink={val.link}
                                    
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Service;