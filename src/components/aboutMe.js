import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className="accent-outline content">
                    <h1 className="title-font accent-color1">Here is some information about me</h1>
                    <ul>
                        <li>
                            I am full stack (javascript) developer with a background in life sciences.
                        </li>
                        <li>
                            I got a BS in Chemistry and in Neuroscience from Duke, and worked in the biotech industry.
                        </li>
                        <li>
                            For the last two years I have been working at a healthcare startup, building a MEAN stack platform that
                            enables healthcare providers to report quality metric data on their patient population.
                        </li>
                        <li>
                            I love building cool things and solving challenging problems.
                        </li>
                        <li>
                            I also love to go camping.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}