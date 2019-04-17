import * as React from 'react';
import './topheader.less';
import { Avatar } from 'antd';

class topheader extends React.Component{
	render(){
		return (
			<div className='colorfff fs-14 t-FBH align-center'>
				<div className="t-FB1">自定义头部</div>
				<Avatar className='mr-20'>USER</Avatar>
			</div>
		)
	}
}

export default topheader;