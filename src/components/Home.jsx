import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Chapter1 from './Chapter1'
import Banner from "./Banner";


let obj = {
    title: 'Cases',
    name: 'Some Example Design Patterns'

};
let obj2 = {
    title: 'Works',
    name: 'Some Works'
};


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dom: this.hookDom
        }
    }

    hookDom = () => {
        return (
            <img style={{opacity: 0, position: 'fixed'}}
                 alt="首屏渲染勾子"
                 src="http://p1.bqimg.com/567571/db48a6c4ee347b14.jpg"
                 onLoad={this.onLoadHandler}/>
        )
    };

    onLoadHandler = () => {
        this.setState({dom: this.mainDom})
    };

    mainDom = () => {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Banner/>
            </ReactCSSTransitionGroup>
        )
    };

    render() {
        return this.state.dom();
    }
}




