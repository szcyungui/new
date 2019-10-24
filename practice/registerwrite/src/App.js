import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json'
const server = 'http://127.0.0.1:8000';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      age: 0
    }
    this.change = this.change.bind(this)
    this.write = this.write.bind(this)
    // this.read = this.read.bind(this)
  }
  
  change(key,e){
    this.setState({
      [key]:e.target.value
    });
  }

  async write(){
    let data = {...this.state};
    console.log(data);
    let res = await axios.post(`${server}/write/`,data);
    console.log(res);
  }

  render() {
    return (
      <div className="App">
        <label>name:  </label>
        <input onChange={(e) => (this.change('name',e))}/>
        {/* <input onChange={this.change(this.props)}/> */}
        <br/>
        <label>age:</label>
        <input onChange={(e) => (this.change('age',e))}/>
        <br/>
        <button onClick={this.write}>write</button>
        <button >read</button>
      </div>
    )
  }
}
