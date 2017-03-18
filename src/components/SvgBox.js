/**
 * Created by Carry Wang on 2017/3/18.
 */
import React, {Component} from 'react';


let svgList = [];
for (let i = 0; i < 6; i++) {
    let obj = {
        svg: require(`../images/s${i + 1}.svg`)
    };
    svgList.push(obj);
}

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            svgList
        }
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.moveHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.moveHandler);
    }

    moveHandler = (e) => {

        //鼠标当前坐标（cursorX，cursorY）
        let cursorX = e.pageX;
        let cursorY = e.pageY;

        //中心点的坐标（centerX，centerY）
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;

        //鼠标点相对与中心点的偏移量（offsetX,offsetY）
        let offsetX = cursorX - centerX;
        let offsetY = cursorY - centerY;

        //规定最大偏移角度
        // let deg = 30;
        let offset = 20;

        //比例映射
        let scaleX = offsetX / centerX;
        let scaleY = offsetY / centerY;

        let {svgList} = this.state;

        svgList = svgList.map((item, i) => {
            return {
                ...item,
                transform: `translate(${-scaleX * offset * (i + 1)}px,${-scaleY * offset}px)`
            }
        });

        this.setState({
            svgList
        })

    };


    render() {
        const {svgList} = this.state;
        return (
            <div className="mySvgBox" ref="mySvgBox">

                {
                    svgList.map((item, i) => {
                        return (
                            <div key={i} className={`svg${i + 1}`} style={{transform: item.transform}}>
                                <img src={item.svg} alt="aa"/>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}