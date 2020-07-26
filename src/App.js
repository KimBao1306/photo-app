import Header from 'components/Header';
import NotFound from 'components/NotFound';
import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loading from 'components/Loading';
import productApi from 'api/productsApi';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
	useEffect(() => {
		const getBlogs = async () => {
			try {
				const params = {_page: 1, _limit: 20};
				const response = await productApi.getAll(params);
				console.log(response);
			} catch (error) {
				console.log('Error: ', error);
			}
		};
		getBlogs();
	}, []);

	return (
		<div className="App">
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Header />

					<Switch>
						{/* <Redirect exact from="/" to="/photos" /> */}

						<Route
							exact
							path="/"
							component={() => <div>Hello Word - This is a home page</div>}
						/>
						<Route path="/photos" component={Photo} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
