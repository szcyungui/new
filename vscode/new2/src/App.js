import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList,Like } from "./components";

export default class App extends Component {
  //constructor 写参数的
  constructor() {
    super();
    this.state = {
      title: "待办事件列表",
      desc: "今日事，今日毕",
      article:"<div>经年梦一场，<i>轮回情已荒</i></div>",
      todos: [
        {
          id: 1,
          title: "吃饭",
          isCompleted: true,
          assignee:"Leo"
        },
        {
          id: 2,
          title: "睡觉",
          isCompleted: false,
          assignee:"Xiaoling"
        }
      ]
    };
  }

  addTodo = (todoTitle) =>{
    //这样写出事儿  3不是一个数组 push返回的是数组的长度
    // this.setState({
    //   todos:this.state.push({
    //     id:Math.random(),
    //     title:todoTitle,
    //     isCompleted:false
    //   })

    //这个是正确的代码
    // this.setState({
    //   //concat返回的是数组 的内容
    //   todos:this.state.todos.concat({
    //     id:Math.random(),
    //     title:todoTitle,
    //     isCompleted:false
    //   })
    // })

    //newTodos+slice+push的方法实现
    const newTodos = this.state.todos.slice()
    newTodos.push({
      id:Math.random(),
      title:todoTitle,
      isCompleted:false
    })
    this.setState({
      todos:newTodos
    })
  }

  onCompletedChange = () =>{
    this.setState((preState) =>{
      return{
        todos:preState.todos.map(todo => {
          if(todo.id === this.props.id){
            todo.isCompleted = !todo.isCompleted
          }
          return todo
        })
      }
    })
  }

  //知识拓展：完全受控组件（好理解，参数完全由参数传递的地方决定） 参量这类的东西完全由外部的props获取  半受控组件 自主控件
  render() {
    return (
      //只能接受一个空元素 不想要div可以换成 Fragment
      // <div>
      //     <TodoHeader/>
      //     <TodoInput/>
      //     <TodoList/>
      // </div>

      //空标签
      <Fragment>
          {
            //   this.state.article
               <div dangerouslySetInnerHTML={{__html:this.state.article}}></div>
          }
        {/* 同样反映了原理 在jsx中写js加{} */}
        {/* {this.state.todos.isCompleted ? 'Yes':'No'} */
            this.state.todos.map(todo=>{
                return <div key={todo.id}>{todo.id}:{todo.title}</div>
            })
        }
        
        <TodoHeader desc={this.state.desc} x={1} y={2}>
          {this.state.title}
        </TodoHeader>
        <TodoInput btnText="ADD" 
        addTodo= {this.addTodo}
        />
        <TodoList 
          todos = {this.state.todos}
          onCompletedChange={this.onCompletedChange}
        />
        <Like></Like>
      </Fragment>

      // //空标签
      // <>
      //     <TodoHeader/>
      //     <TodoInput/>
      //     <TodoList/>
      // </>
    );
  }
}
