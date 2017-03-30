import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Nav from './Nav';
import Banner from './Banner';
import Title from './Title';
import Contact from './Contact'
import Photos from './Photos'
import CardBox from './CardBox'
import SvgBox from './SvgBox'
import Load from './Load'
import AboutMe from './AboutMe'
// import Test from './Test'
// import GithubCorner from './GithubCorner'


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
            dom: this.testDom
        }
    }

    // componentDidMount() {
    //    setTimeout(()=> {
    //        this.setState({dom: this.mainDom})
    //    }, 3000)
    // }

    testDom = ()=>{
        return(
            <img style={{opacity:0,position:'fixed'}}
                 alt="首屏渲染勾子"
                 src="http://p1.bqimg.com/567571/db48a6c4ee347b14.jpg"
                 onLoad={this.onLoadHandler}/>
        )
    };

    onLoadHandler=()=>{
        this.setState({dom: this.mainDom})
    };

    mainDom = ()=> {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Nav/>
                <Banner/>
                <AboutMe/>
                <CardBox/>
                <SvgBox/>
                <Title {...obj2}/>
                <Photos/>
                <Contact/>
            </ReactCSSTransitionGroup>
        )
    };

    loadingDom = ()=> {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Load/>
            </ReactCSSTransitionGroup>
        )
    };

    render() {
        return this.state.dom();
    }
}




