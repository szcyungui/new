import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
      return(
          <CountConsumer>
              {
                  (arg) => {
                      console.log(arg)
                      return <span>{arg.count}</span>
                  }
              }
          </CountConsumer>
      )
    }
  }
