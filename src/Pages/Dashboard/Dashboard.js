import React from 'react';
import { HomeOutlined, BankOutlined , UserOutlined,FolderOpenOutlined  } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    key: '1',
    icon: React.createElement(HomeOutlined),
    label: 'Home',
  },
  {
    key: '2',
    icon: React.createElement(UserOutlined),
    label: 'Student',
  },
  {
    key: '3',
    icon: React.createElement(BankOutlined),
    label: 'College',
  },
  {
    key: '4',
    icon: React.createElement(FolderOpenOutlined),
    label: 'Library',
  },
  {
    key: '5',
    icon: React.createElement(UserOutlined),
    label: 'About Us',
  }
];
function Dashboard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height:"100vh"}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
     <div className='logo'>
        
     </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            // minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Univercity ©{new Date().getFullYear()} Created by Ni30
      </Footer>
    </Layout>
  </Layout>
  );
}

export default Dashboard;
