/**
 * Created by Carry Wang on 2017/3/18.
 */
import React, {Component} from 'react';
import dataList from '../datas/photos.json'

export default class Photos extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {dataList.map((item,i) => {
                        const style = {background: `url(${item.url}) center center / cover`};
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