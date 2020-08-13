import Header from 'components/Header';
import NotFound from 'components/NotFound';
import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loading from 'components/Loading';
import productApi from 'api/productsApi';

import firebase from 'firebase';

// Configure Firebase.
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

const Photo = React.lazy(() => import('./features/Photo'));
const Auth = React.lazy(() => import('./features/Auth'));

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

	useEffect(() => {
		const unregisterAuthObserver = firebase
			.auth()
			.onAuthStateChanged(async (user) => {
				if (!user) {
					console.log('No user logged in');
					return;
				}

				var displayName = user.displayName;
				var email = user.email;
				var emailVerified = user.emailVerified;
				var photoURL = user.photoURL;
				var uid = user.uid;
				var phoneNumber = user.phoneNumber;
				var providerData = user.providerData;
				//tự động refresh token
				const token = await user.getIdToken();

				localStorage.setItem('token_firebase', JSON.stringify(token));
				// console.log(email);
				// console.log(emailVerified);
				// console.log(photoURL);
				// console.log(uid);
				// console.log(phoneNumber);
				// console.log(providerData);
			});

		return () => unregisterAuthObserver();
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
						<Route path="/auth" component={Auth} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
