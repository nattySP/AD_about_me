import React, { Component } from 'react';
import g_and_n from "../assets/g_n_about_me.jpg"
import o from "../assets/o_about_me.jpg"

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
                            I am full stack javascript developer with a background in life sciences.
                        </li>
                        <li>
                            I got a BS in Chemistry and in Neuroscience from Duke, and worked in the biotech industry.
                        </li>
                        <li>
                            For the last two years I have been working at a health care startup, building a MEAN stack platform that
                            enables medical providers to report quality metric data on their patient population.
                            <ul>
                                favorite parts:
                                <li>
                                    building features that improved the user experience and improved the quality of the
                                    data entered
                                </li>
                                <li>
                                    the platform replaced a painfully inefficient process and made the jobs of the
                                    personnel who deal with the data much easier
                                </li>
                            </ul>
                        </li>
                        <li>
                            I love building cool things and solving challenging problems.
                        </li>
                        <li>
                            I also love to go camping.
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