import React, {Component} from 'react'
import '../styles/CheckBox.css'

export default class CheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRun: false
        }
        this.checkHandler = this.checkHandler.bind(this)
    }

    checkHandler(e) {
        console.log(this)
        this.setState({
            isRun: e.target.checked
        })
    };

    render() {
        return (
            <div className="cw-Switch">
                <input id="cw1" type="checkbox" checked={this.state.isRun} onChange={this.checkHandler}/>
                <label htmlFor="cw1">{}</label>
            </div>
        )
    }
}
