import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Welcome (props) {
//     return <h1>Hello, {props.name}</h1>
// }
//
// let arr = ["jack", "rose", "jordan"]

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {  //state是状态
            date: new Date(),
            show: true,
            name: '诺'
        }

        //事件绑定this
        this.showClick = this.showClick.bind(this)
        // this.findId = this.findId.bind(this)
    }

    //
    // showClick () {
    //     this.setState(res => ({
    //         show: !res.show
    //     }))
    // }
    showClick (e) {
        // let thatShow = this.state.show
        // this.setState({show: !thatShow})
        console.log(e)
        this.setState(res => ({show: !this.state.show}))
    }

    //这个周期执行函数
    componentDidMount () {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //这个周期清除定时
    componentWillUnmount () {
        clearInterval(this.timerId)
    }

    tick () {
        this.setState({date: new Date()})
    }

    doSomeThing () {
        alert("绑定事件")
    }

    findId (name, e) {
        console.log(e.target.id)
        console.log(name)
    }

    render () {
        let listArr = [1, 2, 3, 5]
        let listItem = listArr.map((list) =>
            <li id={list.toString()} key={list}>{list}</li>
        )
        return (
            <div className="App">
                <header className="App-header" onClick={this.doSomeThing}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {/*<Welcome name={arr[0]}/>*/}
                {/*<Welcome name={arr[1]}/>*/}
                {/*<Welcome name={arr[2]}/>*/}
                <div>
                    <h1 onClick={this.showClick}>{this.state.show ? 'hello' : 'bye-bye'}</h1>
                    <h2>
                        It is {this.state.date.toLocaleTimeString()}.
                    </h2>
                </div>
                <ul id="like" onClick={this.findId.bind(this, this.state.name)}>
                    <li id="son">like</li>
                </ul>
                <ul>{listItem}</ul>
            </div>
        );
    }
}

export default App;
