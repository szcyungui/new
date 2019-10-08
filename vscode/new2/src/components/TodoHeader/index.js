import React from "react";
import propTypes from 'prop-types'

export default function TodoHeader(props) {
  console.log(props)
  return (
    <>
      <h1>{props.children}</h1>
      <h3>{props.desc}</h3>
      <p>x+y:{props.x+props.y}</p>


    </>
  );
}

//设置默认值 结构更加严谨
TodoHeader.defaultProps = {
  desc:'当你老了'
}

//类型检验代码
TodoHeader.propTypes = {
    //is.Required 代表必须  不能没有值，不加这个的话 如果根本没有这个变量就不会报错
    desc: propTypes.string.isRequired,
    children:propTypes.string.isRequired,
    x:propTypes.number,
    y:propTypes.number,
}