import React, {Component} from 'react'
import './index.css'

class TodoLists extends Component {
    constructor() {
        super()
    }

    render() {
        const list = this.props.lists
        const activeList = list.map((k) => {
            if (k && !k.status) return k
        })
        const completedList = list.map((k) => {
            if (k && k.status) return k
        })

        let lookList = []

        switch (this.props.lookStatus) {
            case "All":
                lookList = list
                break
            case "Active":
                lookList = activeList
                break
            case "Completed":
                lookList = completedList
                break
        }
        const renderList = lookList.map((key, index) => {
                if (key) {
                    return <li key={key.text}>
                        <div className="status" onClick={() => this.props.setStatus(index)}>
                            {
                                key.status ? "已完成" : "未完成"
                            }</div>
                        <div className="content">{key.text}</div>
                        <button className="remove"
                                onClick={() => this.props.removeList(index)}
                        >删除
                        </button>
                    </li>
                }
            }
        )

        return (
            <div id="todo-list">
                <ul className="renderList">{renderList}</ul>
            </div>
        )
    }
}

export default TodoLists