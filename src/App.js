import React, { useState } from 'react';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import Sider from 'antd/es/layout/Sider';
import { Menu, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Common } from './Pages';

const App = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	// 当前路径
	const [ path, setPath ] = useState('/');

	return (
		<Layout className='container'>
			<Sider>
				<div className="sider-title">分类栏目</div>
				<Menu
					theme="dark"
					mode="inline"
					selectedKeys={[path]}
					items={
						[
							[ UserOutlined, '常用', '/' ],
							[ UserOutlined, 'Code', '/code' ],
							[ UserOutlined, 'Note', '/note' ],
						].map(
							( [ icon, text, path ] ) => ({
								key: path,
								icon: React.createElement(icon),
								label: text,
								onClick: () => {
									setPath(path);
								}
							}),
						)}
				/>
			</Sider>

			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
					className='header'
				>Intelligent Start</Header>
				<Content
					style={{
						margin: '24px 16px 0',
					}}
				>
					<div
						style={{
							padding: 24,
							height: '70vh',
								background: colorBgContainer,
							position: 'relative'
						}}
					>
						<Routes>
							<Route
								path="/"
								element={ <Common path={path} /> }
							/>		
						</Routes>
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>Ant Design ©2023 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
