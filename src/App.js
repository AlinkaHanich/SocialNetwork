import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	debugger;
	return (
		<div className="container">
			<Header />
			<Navbar />
			<Content />
			<Footer />
		</div>
	);
};

export default App;
