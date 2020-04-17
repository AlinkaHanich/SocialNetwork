import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';


const App = (props) => {
debugger
	return (
		<div className="container">
			<Header />
			<Navbar  store={props.store}/>
			<Content  dispatch={props.dispatch} store={props.store} />
			{/* <Content state={props.state} dispatch={props.dispatch} store={props.store} /> */}

			<Footer />
		</div>
	);
};

export default App;
