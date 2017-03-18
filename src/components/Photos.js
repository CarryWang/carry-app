/**
 * Created by Carry Wang on 2017/3/18.
 */
import React, {Component} from 'react';
import data from '../datas/photos.json'

let imgList = data.map((item) => {
    let imgUrl = require(`../images/${item.imgName}`);
    return {
        ...item,
        imgUrl
    }
});

export default class Photos extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {imgList.map((item,i) => {
                        const style = {background: `url(${item.imgUrl}) center center / cover`};
                        return (
                            <div key={i} className="col-sm-4 photo-item" style={style}>
                                <div className="photo-mask">
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}