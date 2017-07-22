import React, { Component } from 'react';

export default class Cover extends Component {
    render() {
        return (
            <div className="title-font">
                <div className="accent-outline cover">
                    <div className="accent-color5 heading-container">
                        <h1 className="title-font">Hello,</h1>
                    </div>
                    <div className="accent-color1 heading-container">
                        <h2 className="title-font">I'm Natalie Hall.</h2>
                    </div>
                    <div className="accent-color2 heading-container">
                        <h3 className="title-font">Nice to meet you.</h3>
                    </div>
                </div>
            </div>
        );
    }
}