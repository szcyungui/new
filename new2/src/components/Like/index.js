import React, { Component } from "react";

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false
    };
  }

  handleLikedClick = () => {
    // this.state.isLiked = true 这种方式在react中不正确 值确实修改了 但是界面不刷新
    //修改数据需要使用setState方法
    //setState方法可以有两种情况 第一种情况是一个对象
    // this.setState({
    //     isLiked:!this.state.isLiked
    // })

    //setState方法可以有两种情况 第二种情况是一个方法
    //preState是接收的上一次的参数
    this.setState(preState => {
      console.log('setState内部的this.state.isLiked',this.state.isLiked)
      return {
        isLiked: !preState.isLiked
      };
    },()=>{
        //由于setState是异步的 想要获取到最新的state 应该在这个回调来获取
        console.log('通过回调得到的最新的state',this.state.isLiked)
    });
      console.log('setState外部的this.state.isLiked',this.state.isLiked)
  };

  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {this.state.isLiked ? "取消 红心" : "喜欢 黑心"}
        </span>
      </div>
    );
  }
}
