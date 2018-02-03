import React, {Component} from 'react'
import './index.css'

export default class TodoStatus extends Component {
    constructor() {
        super()
    }

    render() {
        const list = this.props.lists
        let listLen = []
        list.forEach((k) => {
            if (k && !k.status) {
                listLen.push(k)
            }
        })
        return (
            <div id="todo-input">
                <div className="numbers">
                    {listLen.length} item left
                </div>
                <ul onClick={(e) => {
                    this.props.look(e)
                }}>
                    <li>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>
                <div className="clear-completed"
                     onClick={() => {
                         this.props.clearCompleted()
                     }}>
                    Clear completed
                </div>
            </div>
        )
    }
}