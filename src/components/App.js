import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import CheckBox from './CheckBox'

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/CheckBox" component={CheckBox}/>
            </div>
        </Router>
    )
};

export default App;


