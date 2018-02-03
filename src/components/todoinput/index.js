import React, {Component} from 'react'
import './index.css'

export default class TodoInput extends Component {
    constructor() {
        super()
        this.state = {
            text: "hello"
        }

        this.btnDown = this.btnDown.bind(this)
        this.input = this.input.bind(this)
    }

    input(e) {
        this.setState({text: e.target.value})
    }

    btnDown() {
        this.props.update(this.state.text)
        this.state.text = ''
        document.getElementById("thisInput").value = ''
    }

    render() {
        const text = this.state.text
        return (
            <div id="todo-input">
                <input id="thisInput" type="text" value={this.state.text} onChange={this.input}/>
                <input type="button" value="提交" onClick={this.btnDown}/>
            </div>
        )
    }
}