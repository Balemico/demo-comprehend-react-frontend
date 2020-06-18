import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Results from './components/Results/Results';

import './App.css';

const App = () => {
	return (
		<div className='app'>
			<div className='main'>
				<Header />
				<div className='interface'>
					<Input />
					<Results />
				</div>
			</div>
		</div>
	);
};

export default App;
