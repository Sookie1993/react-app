import * as React from "react";
import { Skeleton } from 'antd';

class Home extends React.Component{
	render(){
		return(
			<div>
				首页
				<Skeleton active/>
			</div>
		)
	}
}

export default Home;