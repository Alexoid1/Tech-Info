import React from 'react';
import ReactDOM from 'react-dom';
import{Provider} from 'react-redux';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import store from './redux/store'

import Result from './Components/result';
import Details from './Components/Details';


const Root=(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/results" component={Result}/>
        <Route path="/details/:itemId" component={Details}/>
        <Redirect from="/" to="/results"/>
      </Switch>
    </Router>

  </Provider>
  
)

ReactDOM.render(
  
  Root
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

