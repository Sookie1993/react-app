import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import Routers from "./router";
// import './styles/app.css';
import './styles/common.less';
import Topheader from './components/topheader';
import Leftsider from './components/sider';
import { Layout } from 'antd';
// const 语句放在所有的import后面
const {
  Header, Sider, Content, //Footer
} = Layout;

class App extends Component {
  render() {
    return <Layout className='main'>
			{/* 头部通栏 */}
      <Header>
				<Topheader/>
			</Header>
			{/* 中间布局 */}
      <Layout>
				{/* 左侧导航栏 */}
        <Sider theme='dark'>
					<Leftsider/>
				</Sider>
				{/* 页面主内容 */}
        <Content className='m-10 fff pd-10'>
					<div id="root">
						<Routers/>
					</div>
				</Content>
      </Layout>
			{/* 脚部 */}
      {/* <Footer className='text-center color666'>Powered By Guowenfang @right</Footer> */}
    </Layout>
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();