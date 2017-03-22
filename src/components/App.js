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
            dom: this.loadingDom
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({dom: this.mainDom})
        }, 4000)
    }

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
                <Title {...obj}/>
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




