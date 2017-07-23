import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Cover from './components/cover';
import AboutMe from './components/aboutMe';
import DrivesMe from './components/drivesMe';
import Interest from './components/interest';
import Qualifications from './components/qualifications';
import Demo from './components/demo';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div id="body">
            <BrowserRouter>
                <div>
                    <div className="tabs">
                        <ul className="title-font">
                            <li><Link to="/">Hello</Link></li>
                            <li><Link to="/me">About Me</Link></li>
                            <li><Link to="/drive">More About Me</Link></li>
                            <li><Link to="/interest">Interest</Link></li>
                            <li><Link to="/qualifications">Qualifcations</Link></li>
                            <li><Link to="/demo">Demo</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Cover}/>
                            <Route path="/me" component={AboutMe}/>
                            <Route path="/drive" component={DrivesMe}/>
                            <Route path="/interest" component={Interest}/>
                            <Route path="/qualifications" component={Qualifications}/>
                            <Route path="/demo" component={Demo}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
      </div>
  </Provider>
  , document.querySelector('.container'));
