import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Game = lazy(() => import('./game'));
const About = lazy(() => import('./about'));
const Menu = lazy(() => import('./menu'));

function AppRouter() {
	return (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/" component={Menu}/>
				<Route path="/game" component={Game}/>
				<Route path="/about" component={About}/>
			</Switch>
		</Suspense>
	</Router>
	)
};

export default AppRouter;