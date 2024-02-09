import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import * as Fa6Icons from "react-icons/fa6";
import { Layout, Button, Menu} from 'antd';
import Sidebar from './Sidebar';

const { Header, Sider, Content } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 769);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const title = path.split("/").pop();
    setPageTitle(title);
  }, [location.pathname]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <main className="project-wrapper">
      <Layout className="layout-wrapper" style = {
        {
            height: "80vh",
            width: "80vw",
            overflow: "hidden"
          }
        }>
          <Layout className="layout-container" style={
            {
              "background-color": "rgba(8, 34, 57, 0.6)",
              "border-radius": "20px",
              "border": "1px solid #66789d",
            }
          }>
            <Header
              style={{
                padding: 0,
                "background-color": "rgba(8, 34, 57, 0)",
                "border-radius": "20px",
              }}
            >
              <h1 id='page-title'>{pageTitle}</h1>
              { isMobile ? '' :              
              (<Button
                type="text"
                icon={collapsed ? <Fa6Icons.FaToggleOn /> : <Fa6Icons.FaToggleOff />}
                onClick={() => toggleCollapsed()}
                style={{
                  fontSize: '16px',
                  width: "80px",
                  height: "80px",
                }}
              />)
              }
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                "background-color": "rgba(8, 34, 57, 0)",
              }}
            >
              <section className="content-wrapper">
                <Outlet />
              </section>
            </Content>
          </Layout>
          {isMobile ? (
          <Menu
            isMobile={true}
            id="mobile-menu"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', marginLeft: 'auto' }}
          >
            <Sidebar isMobile={true} />
          </Menu>
        ) : (
          <Sider
            id="side-nav"
            className="sidebar-container"
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              backgroundColor: "rgba(8, 34, 57, 0.9)",
              borderRadius: "20px",
              border: "1px solid #66789d",
            }}
          >
            <Sidebar isMobile={false} />
          </Sider>
        )}
      </Layout>
    </main>
  );
  

};

export default MyLayout;
