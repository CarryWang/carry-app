import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Chapter1 from './Chapter1'
import CheckBox from './CheckBox'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Chapter1}/>
                <Route path="/home" component={Home}/>
                <Route path="/CheckBox" component={CheckBox}/>
            </div>
        </Router>
    )
};

export default App;


