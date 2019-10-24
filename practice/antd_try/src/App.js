import { Button } from 'antd';
import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return(
      <div className='App'>
        <Button loading type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    )
  }
}
