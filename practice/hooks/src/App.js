import React, { Component,Fragment } from 'react'

export default class App extends Component {
  state;
  render() {
    return (
      <Fragment>
        <CountBtn type="decrement">-</CountBtn>
        <Counter />
        <CountBtn type="increment">+</CountBtn>
      </Fragment>
    );
  }
}
