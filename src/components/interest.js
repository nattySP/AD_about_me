import React, { Component } from 'react';

export default class Interest extends Component {
    render() {
        return (
            <div>
                <div className="accent-outline content">
                    <div className="accent-color1 heading-container">
                        <h1 className="title-font">Here is why I'm interested in the role</h1>
                    </div>
                    <ul>
                        <li>
                            Love of life sciences and a desire to make tools that make scientists jobs easier.
                        </li>
                        <li>
                            Challenging front-end problems
                        </li>
                        <li>
                            Don't forget to tell them about that summer spent using NCBI BLAST tool to design
                            primers for PCR...
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}