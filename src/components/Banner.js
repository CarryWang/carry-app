/**
 * Created by Carry Wang on 2017/3/18.
 */
import React, { Component } from 'react';
// import svg from '../images/shapes-light.svg'


export default class Banner extends Component {
    render() {
        return (
            <div className="myBanner">
                <div className="banner-container">
                    {/*<div className="banner-img">*/}
                        {/*<img src={svg} alt="avatar"/>*/}
                    {/*</div>*/}
                    <div className="head-animation">{}</div>
                    <h1 className="banner-title">Carry Wang</h1>
                    <p className="banner-desc">Design, Code & Things in Between </p>
                </div>
            </div>
        )
    }
}