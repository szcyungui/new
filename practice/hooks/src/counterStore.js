import React, { Component, Fragment, createContext} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// context中的countconsumer是一个function
//createContext这个方法返回的是一个对象，里面有Provider和Consumer两个
const { Provider, Consumer: CountConsumer } = createContext()

//封装一个基本的Provider，因为直接使用Provider不太好，不方便管理状态
class CountProvider extends Component {
  constructor() {
    super();
    //这里的状态是共享的，任何CounterProvider的后代组件都可以通过CounterConsumer来接收
    this.state = {
      count: 100
    };
  }

  //这里的方法也会继续通过Provider传递下去
  incrementCount = () =>{
      this.setState({
          count:this.state.count + 1
      })
  }

  decrementCount = () =>{
    this.setState({
        count:this.state.count - 1
    })
}

  render() {
    return (
      <Provider
      //这个组件必须有一个value值，value也可以传递任何的数据，一般是传递一个对象比较合理
        value={{
          count: this.state.count,
          onIncrementCount: this.incrementCount,
          onDecrementCount: this.decrementCount,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export {
    CountConsumer,
    CountProvider
}

