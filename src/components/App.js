import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Chapter1 from './Chapter1'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Chapter1}/>
                <Route path="/home" component={Home}/>
            </div>
        </Router>
    )
};

export default App;


