import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { navData } from '../lib/NavData';

const Sidebar = ({isMobile}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getSelectedKey = () => {
    const selectedItem = navData.find(item => item.link === currentPath);
    return selectedItem ? [selectedItem.id.toString()] : ['1'];
  }
  return(
    <nav>
      <div className="demo-logo-vertical" />
        <Menu id="nav-ul" style={{
          "background-color": "rgba(8, 34, 57, 0)",
        }}
          mode="inline"
          defaultSelectedKeys={getSelectedKey()}
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

