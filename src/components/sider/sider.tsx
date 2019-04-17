import * as React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

interface initState{
	collapsed: boolean | undefined,
	defaultSelectedKeys: string[]
}
interface Props{

}
class sider extends React.Component<Props,initState>{
	constructor(props:any){
		super(props);
		this.state={
			collapsed: false,
			defaultSelectedKeys: ['1']
		}
	}
	/**
	 * 关闭收起
	 */
	toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
	/**
	 * 路由跳转
	 */
	go=(hash:string, key: string)=>{
		location.hash = hash;
		this.setState({
			defaultSelectedKeys: [key]
		})
	}
	render(){
		return(
			<div>
				<Menu
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" onClick={()=>{this.go('/', '1')}}>
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={()=>{this.go('/', '2')}}>
            <Icon type="desktop" />
            <span>Canvas</span>
          </Menu.Item>
          <Menu.Item key="3" onClick={()=>{this.go('/about','3')}}>
            <Icon type="inbox" />
            <span>关于我</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Examples</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
			</div>
		)
	}
}
export default sider;