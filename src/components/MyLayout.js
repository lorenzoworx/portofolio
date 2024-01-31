import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as Fa6Icons from "react-icons/fa6";
import { Layout, Button, } from 'antd';
import Sidebar from './Sidebar';
const { Header, Sider, Content } = Layout;

const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

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
              <Button
                type="text"
                icon={collapsed ? <Fa6Icons.FaToggleOn /> : <Fa6Icons.FaToggleOff />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
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
          <Sider className="sidebar-container" trigger={null} collapsible collapsed={collapsed} style={
            {
              "background-color": "rgba(8, 34, 57, 0.9)",
              "border-radius": "20px",
              "border": "1px solid #66789d",
            }
          }>
            <Sidebar />
          </Sider>
      </Layout>
    </main>
  );


};

export default MyLayout;
