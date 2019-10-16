import React, { Component } from "react";

export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
  }
  // 组件的私有方法都用 _ 开头，
  // 所有事件监听的方法都用 handle 开头。
  // 把事件监听方法传给组件的时候，属性名用 on 开头
  componentWillMount () {
    this._loadUsername()
  }

  componentDidMount () {
    this.textarea.focus()
  }

  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }
  //私有方法  设置字段内容 使得内容长久
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }

  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }
    this.setState({ content: "" });
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              // 使得输入框输入的内容可以长时间保存住
              onBlur={this.handleUsernameBlur.bind(this)}
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}
