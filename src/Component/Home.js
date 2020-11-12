import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common'
import C from '../image/C.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <Common 
                    heading="Grow your business with"
                    name="Welcome to our page"
                    imgsrc={C}
                    description="Some text will be here. Some text will be here. Some text will be here. Some text will be here.Some text will be here.Some text will be here.Some text will be here. "
                    visit="/service"
                    btnname="Get started"
                />
                
            </div>
        );
    }
}

export default Home;