//react里面通过ref或许组件或者dom元素  但是必须提前调用createRef来进行调用
//大写的名字是对象 小写的是方法
import React, { Component,createRef} from 'react'
import propTypes from 'prop-types'
export default class TodoInput extends Component {
    //在function中只要使用static 就可以 
    static propTypes = {
        btnText:propTypes.string.isRequired
    }
    //设置默认值 结构更加严谨
    static defaultProps = {
        btnText:'添加'
    }

    constructor(){
        super()
        this.state = {
            inputVlaue:''
        }
        //在constructor里面创建ref
        this.inputDom = createRef()
    }

    handleInputChange = (e)=>{
        // console.log(e.currentTarget.value)
        this.setState({
            inputVlaue:e.currentTarget.value
        })
    }

    // handleAddClick=(id)=>{
    //     console.log(this.state,id)
    // }

    handleKeyup=(e)=>{
        // 回车的键值
        if(e.keyCode === 13){
            this.handleAddClick()
            //将输入框的数值清除之后再进行focus操作  参见箭头函数
            this.setState({
                inputVlaue:''
            }, () =>{
                this.inputDom.current.focus()
            })
        }
    }

    handleAddClick=(id)=>{
        //实际的项目中还需要对this.state.inputValue做验证，通过后再执行修改
        if (this.state.inputVlaue === ''){
            return
        }
        // console.log(this.state,id)
        this.props.addTodo(this.state.inputVlaue)
        //将输入框的数值清除之后再进行focus操作  参见箭头函数
        this.setState({
            inputVlaue:''
        }, () =>{
            this.inputDom.current.focus()
        })
    }

    render() {
        return (
            <div>
                <input 
                type='text' 
                value={this.state.value}
                onChange={this.handleInputChange}
                onKeyUp = {this.handleKeyup}
                ref = {this.inputDom}></input>
                <button onClick={this.handleAddClick}>
                {/* onClick={this.handleAddClick.bind(this,123)} */}
                {this.props.btnText}
                </button>
            </div>
        )
    }
}
