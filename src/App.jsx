import React from 'react';
import Activities from './components/Activities';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

const App = () => {
	return (
		<div>
			<Topbar />
			<Navbar />
			<Hero />
			<Activities />
		</div>
	);
};

export default App;
