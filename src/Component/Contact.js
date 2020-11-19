import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 col-md-6 mx-auto">
                        <form>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="your name"/>
                        <label for="exampleFormControlInput1" className="form-label">Phone no</label>
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="your phone no"/>
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        </form>
                        <input type="submit" className="btn btn-primary" value="Submit"/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Contact;