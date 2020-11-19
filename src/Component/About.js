import React, { Component } from 'react';
import Common from './Common'
import D1 from '../image/D1.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <Common 
                    heading="Lets build a project"
                    name="Top ranked IT company"
                    imgsrc={D1}
                    description="Some text will be here. Some text will be here. Some text will be here. Some text will be here.Some text will be here.Some text will be here.Some text will be here. "
                    visit="/contact"
                    btnname="Contact us"
                />
            </div>
        );
    }
}

export default About;