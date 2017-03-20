/**
 * Created by Carry Wang on 2017/3/18.
 */
import React, { Component } from 'react';


export default class Banner extends Component {
    render() {
        return (
            <div className="myBanner">
                <div className="banner-container">
                    <img src="http://p1.bpimg.com/567571/da594e293dc375d4.jpg" alt="avatar"/>
                    <h1 className="banner-title">Carry Wang</h1>
                </div>
            </div>
        )
    }
}