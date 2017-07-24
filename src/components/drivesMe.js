import React, { Component } from 'react';
import g_and_n from "../assets/g_n_about_me.jpg"
import o from "../assets/o_about_me.jpg"

export default class DrivesMe extends Component {
    render() {
        return (
            <div>
                <div className="accent-outline content">
                    <div className="accent-color1 heading-container">
                        <h1 className="title-font">Here is some more information about me</h1>
                    </div>
                    <ul>
                        <li>
                            I like the idea of creating new knowledge; advancing scientific fields
                        </li>
                        <li>
                            Reward of working hard to accomplish something motivates me
                        </li>
                        <li>
                            Goal oriented
                        </li>
                        <li>
                            I love to learn; growth mindset; goals center around learning new technologies and
                            improving my skills
                        </li>
                        <li>
                            I also love to go camping
                        </li>
                    </ul>
                    <div className="images">
                        <img src={g_and_n}/>
                        <img src={o}/>
                    </div>
                </div>
            </div>
        );
    }
}