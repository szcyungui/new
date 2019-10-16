import React, { Component} from 'react';
import {Icon} from 'antd';
import './index.css'

export default class Icons extends Component {
    render() {
        return (
            <div className = 'icon'>
                <Icon type="windows" theme="filled" />
                <Icon type="apple" theme="filled" />
                <Icon type="alipay-square" theme="filled" />
            </div>
        )
    }
}
