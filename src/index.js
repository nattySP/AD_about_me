import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Cover from './components/cover';
import AboutMe from './components/aboutMe';
import DrivesMe from './components/drivesMe';
import Interest from './components/interest';
import Qualifications from './components/qualifications';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div id="body">
          <div className="tabs">
              <ul className="title-font">
                  <li><a href="/">Hello</a></li>
                  <li><a href="/me">About Me 1</a></li>
                  <li><a href="/drive">About Me 2</a></li>
                  <li><a href="/interest">Interest</a></li>
                  <li><a href="/qualifications">Qualifcations</a></li>
                  <li><a>Demo</a></li>
              </ul>
          </div>
          <div>
            <BrowserRouter>
                <div>
                  <Route exact path="/" component={Cover}/>
                  <Route path="/me" component={AboutMe}/>
                  <Route path="/drive" component={DrivesMe}/>
                  <Route path="/interest" component={Interest}/>
                  <Route path="/qualifications" component={Qualifications}/>
                </div>
            </BrowserRouter>
          </div>
      </div>
  </Provider>
  , document.querySelector('.container'));
