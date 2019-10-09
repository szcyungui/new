import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types'

// export default class index extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


export default class TodoList extends Component {
  //对数据类型的验证
  static propTypes = {
    todos:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      title:PropTypes.string.isRequired,
      isCompleted:PropTypes.bool.isRequired
    })).isRequired,
    onCompletedChange:PropTypes.func
  }

  render() {
    // console.log(this.props)
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            // <TodoItem
            //     key = {todo.id}
            //     id = {todo.id}
            //     title = {todo.title}
            //     isCompleted = {todo.isCompleted}
            // />
            <TodoItem 
            onCompletedChange={this.props.onCompletedChange}
            key={todo.id} 
            {...todo} />
          );
        })}
      </ul>
    );
  }
}
