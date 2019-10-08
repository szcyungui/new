import React, { Component } from 'react'

export default class TodoItem extends Component {
    handleCheckboxChange =()=> {
        const {
            onCompletedChange = () =>{},
            id,
        } = this.props
        // console.log(this.props)
        onCompletedChange(id)
    }

    shouldComponentUpdate (nextProps,nextState){
        return true
    }

    render() {
        const{
            isCompleted,
            title,
        } = this.props
        // console.log(this.props)
        return (
            <li>
                <input 
                checked={isCompleted}
                onChange={this.handleCheckboxChange}
                type="checkbox"/>
                <span>{title}{isCompleted ? '已完成' :'未完成'}</span>
            </li>
        )
    }
}
