/**
 * Created by Carry Wang on 2017/3/17.
 */
import React, { Component } from 'react';


export default class Nav extends Component {

    constructor(props){
        super(props);
        this.state={
            isOpacity:false
        }
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll=(e) =>{
        let winScroll = window.scrollY;
        if(winScroll>430){
            this.setState({
                isOpacity:true
            })
        }else{
            this.setState({
                isOpacity:false
            })
        }
    };

    render() {
        const {isOpacity} = this.state;
        return (
            <div ref='myNav'
                 className={`myNav ${isOpacity?'nav-bgColor':null}`}>
                <h1>Carry Wang</h1>

            </div>
        );
    }
}



