import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { navData } from '../lib/NavData';

const Sidebar = ({isMobile}) => {
  return(
    <nav>
      <div className="demo-logo-vertical" />
        <Menu id="nav-ul" style={{
          "background-color": "rgba(8, 34, 57, 0)",
        }}
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {navData.map((item) => {
            return (
              <Menu.Item key={item.id} icon={item.icon}>
                {isMobile ? 
                  (<NavLink to={item.link}>''</NavLink>)
                  :
                  (<NavLink to={item.link}>{item.label}</NavLink>)
              }                
              </Menu.Item>
            )
          })}
        </Menu>
    </nav>
  )
};

export default Sidebar;

