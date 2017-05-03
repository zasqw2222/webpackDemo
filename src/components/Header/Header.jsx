import React from 'react';
import './index.scss'

import {Menu, Icon} from 'antd';
import {Link} from 'react-router'
export default class HeaderCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'mail'
        }
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({current: e.key});
    }
    render() {
        return (
            <div className="headers">
                <div className="con">
                    <Menu
                        onClick={this
                        .handleClick
                        .bind(this)}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                        <Menu.Item key="mail">
                            <Link to="/">第一</Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                            <Icon type="appstore"/>第二
                        </Menu.Item>
                        <Menu.Item key="alipay">
                            <a href="#" target="_blank" rel="noopener noreferrer">第三</a>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}