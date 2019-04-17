import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';

let routers = [
	{
		path: '/',
		component: Home,
		key: 'home'
	},
	{
		path: '/about',
		component: About,
		key: 'about'
	}
]

const Routers = () => (
  <main>
    <Switch>
			{
				routers.map((router)=>{
					return <Route exact key={router.key} path={router.path} component={router.component}/>
				})
			}
    </Switch>
  </main>
)
console.log(Routers)
export default Routers;