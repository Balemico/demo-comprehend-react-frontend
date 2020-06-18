import React, { useState } from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Results from './components/Results/Results';

import './App.css';

const App = () => {
	const [userInput, setUserInput] = useState('');

	const handleUserInput = (value) => {
		console.log('handleuserinput:', value);
		setUserInput(value);
	};

	return (
		<div className='app'>
			<div className='main'>
				<Header />
				<div className='interface'>
					<Input onUserSubmit={handleUserInput} />
					<Results message={userInput} />
				</div>
			</div>
		</div>
	);
};

export default App;
