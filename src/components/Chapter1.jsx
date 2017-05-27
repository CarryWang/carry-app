import React, {Component} from 'react'
import '../styles/chapter1.css'

export default class Chapter1 extends Component{
    render(){
        return(
            <div className="chapter1">
                <h1>1. 半透明边框</h1>

                <div className="box1-1">
                    Can I haz semi-transparent borders? Pretty please?
                </div>

                <h1>2. 多重边框</h1>

                <div className="flexBox">
                    <div className="box2-1">
                        Can I haz semi-transparent borders? Pretty please?
                    </div>
                    <div className="box2-2">
                        Can I haz semi-transparent borders? Pretty please?
                    </div>
                    <div className="box2-3">
                        Can I haz semi-transparent borders? Pretty please?
                    </div>
                </div>

                <h1>3. 灵活的背景定位</h1>

                <div className="flexBox">
                    <div className="box3-1">
                        Code Pirate
                    </div>
                    <div className="box3-2">
                        Code Pirate
                    </div>
                    <div className="box3-3">
                        Code Pirate
                    </div>
                </div>

                <h1>4. 边框内圆角</h1>

                <div className="box4-1">
                    I have a nice subtle inner rounding, don’t I look pretty?
                </div>
            </div>
        )
    }
}