import React from 'react';
import './index.scss'


import { Link } from 'react-router'

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class HeaderCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1
        };
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({current: e.key});

    }
    render() {
        return (
            <div className="sidebar">
                <Menu
                    style={{
                    width: 240
                }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline">
                    <SubMenu key="sub1" title={<span><span>列表</span></span>}>
          <MenuItemGroup title="大項">
          
            <Menu.Item key="1"><Link to="m1">M1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="m2">M2</Link></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="大項">
            <Menu.Item key="3">選項3</Menu.Item>
            <Menu.Item key="4">選項4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
                </Menu>
            </div>
        )
    }
}