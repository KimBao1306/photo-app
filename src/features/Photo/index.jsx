import NotFound from 'components/NotFound';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import AddEdit from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {};

function Photo(props) {
	const matchRoute = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route exact path={matchRoute.url} component={MainPage} />

				<Route path={`${matchRoute.url}/add`} component={AddEdit} />
				<Route path={`${matchRoute.url}/:photoId`} component={AddEdit} />

				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default Photo;
