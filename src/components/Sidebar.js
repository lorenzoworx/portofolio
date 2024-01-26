import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { navData } from '../lib/NavData';

const Sidebar = () => {
  return(
    <nav>
      <div className="demo-logo-vertical" />
        <Menu style={{
          "background-color": "rgba(8, 34, 57, 0)",
        }}
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {navData.map((item) => {
            return (
              <Menu.Item key={item.id} icon={item.icon}>
                <NavLink to={item.link}>{item.label}</NavLink>
              </Menu.Item>
            )
          })}
        </Menu>
    </nav>
  )
};

export default Sidebar;

