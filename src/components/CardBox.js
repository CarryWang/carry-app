/**
 * Created by Carry Wang on 2017/3/20.
 */
import React, {Component} from 'react';
import dataList from '../datas/cards.json'

export default class CardBox extends Component {
    render() {
        return (
            <div className="container-fluid CardBox">
                <div className="row">
                    {
                        dataList.map((item, i) => {
                            return (
                                <div key={i} className="col-sm-3">
                                    <a href={item.src}>
                                        <div className="card" >
                                            <img src={item.url} alt=""/>
                                            <h1>{item.title}</h1>
                                            <p>{item.desc}</p>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}