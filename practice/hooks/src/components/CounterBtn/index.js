import React, { Component } from 'react'
import { CountConsumer } from '../../counterStore'

export default class CountBtn extends Component {
    render() {
      return(
          <CountConsumer>
              {
                  ({onIncrementCount,onDecrementCount}) => {
                      const handler = this.props.type === 'increment' ? onIncrementCount : onDecrementCount
                      return <button onClick={handler}>{this.props.children}</button>
                  }
              }
          </CountConsumer>
      )
    }
  }