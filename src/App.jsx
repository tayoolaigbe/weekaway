import React from 'react';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Contact from './components/Contact';

const App = () => {
	return (
		<div>
			<Topbar />
			<Navbar />
			<Hero />
			<Activities />
			<Booking />
			<Gallery />
			<Contact />
		</div>
	);
};

export default App;
