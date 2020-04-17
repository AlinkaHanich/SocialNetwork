import './index.scss';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export let rerenderEntireTree = (state) => {
	debugger;
	return ReactDOM.render(
		<BrowserRouter>
			
			<App dispatch={store.dispatch.bind(store)} store={store}/>
			{/* <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> */}
		</BrowserRouter>,
		document.getElementById('root')
	);
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
