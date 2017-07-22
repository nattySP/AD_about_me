import React, { Component } from 'react';

export default class DrivesMe extends Component {
    render() {
        return (
            <div>
                <div className="accent-outline content">
                    <div className="accent-color1 heading-container">
                        <h1 className="title-font">Here is some information about what drives me</h1>
                    </div>
                    <ul>
                        <li>
                            I find working hard to accomplish something rewarding and that reward
                            motivates me.
                        </li>
                        <li>
                            Goal oriented.
                        </li>
                        <li>
                            I love to learn; I have worked to cultivate a growth mindset, so most of my personal goals
                            center around the idea of learning something new and improving myself
                            (especially as an engineer).
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}