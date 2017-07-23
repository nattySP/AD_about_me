import React, { Component } from 'react';

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="accent-outline content">
                    <div className="accent-color1 heading-container">
                        <h1 className="title-font">Here is a demo</h1>
                    </div>
                    <div className="block">
                        <a className="button is-link" target="_blank" href="http://explorna.herokuapp.com">ExploRNA</a>
                    </div>
                    <div className="accent-color2">
                        Challenges/Decisions:
                    </div>
                    <ul>
                        <li>
                            Decided to use React/Redux
                            <div className="aside-container">
                                <ul>
                                    <li>
                                        React is very popular; relevant for role
                                    </li>
                                    <li>
                                        requirement to share state of a view made me think using Redux was a good fit
                                    </li>
                                    <li>
                                        opportunity to learn more about Redux
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            D3.js vs Cytoscape.js
                            <div className="aside-container">
                                <ul>
                                    <li>
                                        Can I avoid using NAView layout algorithm?
                                    </li>
                                    <li>
                                        Started down the D3.js road...
                                    </li>
                                    <li>
                                        Opted to borrow the NAView JS port written
                                        for https://github.com/bene200/drawrnajs project
                                    </li>
                                    <li>
                                        Decided to use Cytoscape.js - very clear methods to describe node positions
                                        with JSON, and also to export the state of the graph layout to JSON
                                    </li>
                                    <li>
                                        Edgehandles module for Cytoscape...no brainer.
                                    </li>
                                    <li>
                                        Challenges involving React component lifecycle and Cytoscape view updates
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            UX decisions
                            <div className="aside-container">
                                <div className="accent-color2">
                                    input validation:
                                </div>
                                <ul>
                                    <li>
                                        A, T, G, C, N only allowed, case doesn't matter
                                    </li>
                                    <li>
                                        Dot Bracket Notation validation notifies user if: DBN has unbalanced brackets,
                                        length mismatch, illegal base pairing
                                    </li>
                                </ul>
                            </div>
                            <div className="aside-container">
                                <div className="accent-color2">
                                    reset pan/zoom:
                                </div>
                                <ul>
                                    <li>
                                        user may accidentally loose their molecule by panning/zooming too enthusiastically
                                    </li>
                                </ul>
                            </div>
                            <div className="aside-container">
                                <div className="accent-color2">
                                    shareable view:
                                </div>
                                <ul>
                                    <li>
                                        open link in new tab or copy link to clipboard -- convenience for user
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            compressing state to share in URL
                            <div className="aside-container">
                                <ul>
                                    <li>
                                        Was initially just base64 encoding the JSON.stringified state, worked fine locally
                                    </li>
                                    <li>
                                        Heroku didn't like the length of the URL that was created
                                    </li>
                                    <li>
                                        At the last minute had to find appropriate compression library
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="accent-color2">
                        Areas for Improvement:
                    </div>
                    <ul>
                        <li>
                            custom cross-browser color pickers and sliders
                        </li>
                        <li>
                            undo button
                        </li>
                        <li>
                            update sequence functionality
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}