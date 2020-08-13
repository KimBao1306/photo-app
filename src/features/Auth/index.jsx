import React from 'react';
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';

function Auth(props) {
	const routeMatch = useRouteMatch();
	return (
		<Switch>
			<Route path={`${routeMatch.url}/login`} component={Login} />
		</Switch>
	);
}

export default Auth;
