import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import './index.css';
import HomePage from './containers/HomePage';
import ListRepositories from './containers/ListRepositories';
import ProfilePage from './containers/ProfilePage';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render( 
	<Provider store = {store}>
			<BrowserRouter>
				<Switch>
					<div className="homePage">
						<Header/>
						<Route exact path="/" component = {HomePage}/>
						<Route path ="/listrepo/:language" component = {ListRepositories}/>
						<Route path ="/profile/:id" component = {ProfilePage}/>
					</div>
				</Switch>
			</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
