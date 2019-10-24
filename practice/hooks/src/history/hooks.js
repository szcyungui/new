import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';

const Counter = () =>{
    // console.log(useState(10))
    // 查看打印
    const [count, setCount] = useState(10)
//是一个回调函数，每次挂载或者更新 都会触发回调方法，类似于ComponentWill和 Did的结合
    useEffect(() => {
        console.log("数值更新了！")
        document.title = `当前的数量为${count}`
    })

    return(
        <div>
        <p>当前的数量：{count}</p>
        <button onClick={()=>{setCount(count - 1)}}>-</button>
        <span>{count}</span>
        <button onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}

ReactDOM.render(
    <Counter/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
