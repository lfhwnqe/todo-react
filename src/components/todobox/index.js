import React, {Component} from 'react'
import TodoInput from '../todoinput/index'
import TodoLists from '../todolists/index'
import TodoStatus from '../todostatus/index'
import './index.css'

export default class TodoBox extends Component {
    constructor() {
        super()
        this.state = {
            itemLists: [],
            numbers: [1, 2, 3, 4, 5],
            lookStatus: 'All'
        }

        this.update = this.update.bind(this)
        this.removeThis = this.removeThis.bind(this)
        this.setStatus = this.setStatus.bind(this)
        this.setLookStatus = this.setLookStatus.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
    }

    //上传数据到数组
    update(i) {
        if (i != '') {
            const lists = this.state.itemLists.slice()
            this.setState(() => ({
                itemLists: lists.concat([{
                    text: i,
                    status: false
                }])
            }))
        }
    }

    setLookStatus(e) {
        if (e.target.innerText) {
            this.setState({
                lookStatus: e.target.innerText
            })
        }
    }

    //测试通讯删除dom节点
    removeThis(index) {
        let list = this.state.itemLists.slice()
        list.splice(index, 1)
        this.setState({
            itemLists: list
        })
    }

    setStatus(index) {
        let list = this.state.itemLists.slice()
        list[index].status = !list[index].status
        this.setState({
            itemLists: list
        })
    }

    //删除已完成项
    clearCompleted() {
        const list = this.state.itemLists.slice()
        let arr = []
        list.forEach((k) => {
            if (k && !k.status) {
                arr.push(k)
            }
        })
        this.setState({
            itemLists: arr
        })
    }

    render() {
        return (
            <div id="todo-box">
                <h1>todos</h1>
                <div id="todo-main">
                    <TodoInput update={this.update}
                    />
                    <TodoLists lists={this.state.itemLists}
                               lookStatus={this.state.lookStatus}
                               removeList={this.removeThis}
                               setStatus={this.setStatus}
                    />
                    <TodoStatus lists={this.state.itemLists}
                                look={this.setLookStatus}
                                clearCompleted={this.clearCompleted}
                    />
                </div>
            </div>
        )
    }
}