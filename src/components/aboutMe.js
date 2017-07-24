import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className="accent-outline content">
                    <div className="accent-color1 heading-container">
                        <h1 className="title-font">Here is some information about me</h1>
                    </div>
                    <ul>
                        <li>
                            I am a full stack javascript developer with a background in life sciences
                        </li>
                        <li>
                            I have a BS in Chemistry and in Neuroscience from Duke, and have worked in the biotech industry
                        </li>
                        <li>
                            For the last two years I have been building a MEAN (MongoDB, Express, AngularJS, Node) stack platform that
                            enables medical providers to report quality metric data on their patient population
                            <div className="aside-container">
                                <div className="accent-color2">
                                    favorite parts:
                                </div>
                                <ul>
                                    <li>
                                        building features that improved the user experience and improved the quality of the
                                        data entered
                                    </li>
                                    <li>
                                        the platform replaced a painfully inefficient process and made the jobs of the
                                        personnel who deal with the data much easier
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            I love building cool things and solving challenging problems.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}