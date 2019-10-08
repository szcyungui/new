// import React from 'react'
// import ReactDom from 'react-dom'

//可以理解为创建了一个react元素
// const app = <h1>Hello React-World!</h1>
// const creatApp = (props) =>{
//     return (
//         <div>
// 在jsx中写js的方式
//             <h1>Hello {props.title}</h1>
//             <p>优秀啊！{props.title}</p>
//         </div>
//     )
// }

// const app = creatApp({
//     title:'React 16.8'
// })

// ReactDom.render(
//     app,
//     document.querySelector('#root')
// )

// 9.22  使用箭头函数创建组件 是第一种方式，但是命名要大写
// const App = (props) =>{
//     return (
//         <div>
//             <h1>Hello {props.title}</h1>
//             <p>优秀啊！{props.title}</p>
//         </div>
//     )
// }

// ReactDom.render(
//     <App title = '1901'/>,
//     document.querySelector('#root')
// )

//************************************************************************************** */
// 使用类（js里没有真正的类）创建组件  添加继承
// import React from "react";
// import { render } from "react-dom";
// //继承！！！！！！！
// class App extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//         //在jsx中下面不符合js语法的代码会被react中createele编译成dom树的结构 一定会涉及到一个编译的过程
//       <div>
//         <h1>{this.props.title}</h1>  
//         <p>{this.props.desc}</p>
//       </div>
//     );
//   }
// }

// 新建一个app实现复用 类组件渲染的方式
// const app = new App({
//     desc:"类组件是继承React.Component"
// }).render

//render 是reactdom提供的方法  通常只调用一次
// render(
//   <App title = '类组件!！' desc="类组件是继承React.Component" />,//如果不新建newAPP则这么写
// //新建了app
//     // app,
//   document.querySelector("#root")
// );

// //在 react16之前 还使用这种方式创建
// React.createClass

//9.22 组件的样式***********************************************************

import React,{Component} from 'react'
import {render} from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
import './index.css'

console.log(styled)

const title = styled.h1`
    color:#F00
`

class App extends Component{
    render(){
        const style={color:'#F00'}
        return (
            <div>
                <h1>元素中的样式1</h1>
                <ol>
                    <li style={{color:'#F00'}}>直接写入style样式</li>
                    <li style={style}>使用style内联创建</li>
                    <li className='has-text-red'>使用class的方式，但是在react里面class要写成className</li>
                    <li 
                        className={classNames('a',{'b':true,'c':false})}
                        >要动态添加不同的classnames就可以使用第三方的包(npm i classnames -S) 比如这个li标签就只有a,b无c</li>
                    <li>styled-Components-npm</li>
                </ol>
            </div>
        )
    }
}

render(
    <App/>, 
    document.querySelector('#root')
)

