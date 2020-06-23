import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Results from './components/Results/Results';

import { LANG_API, ENTITIES_API, SENTIMENT_API } from './api/config';

import './App.css';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState('');

	const handleUserUpload = (response) => {
		if (response) {
			setIsLoading(true);
			setResults(JSON.parse(response));
			setIsLoading(false);
		} else {
			setResults('');
		}

	}

	const handleUserSubmit = async (value) => {
		console.log('handleuserinput:', value);
		setIsLoading(true);
		setResults('');

		const data = { text: value, crossdomain: true };
		const comprehenceData = await axios.all([
			axios.post(LANG_API, data),
			axios.post(SENTIMENT_API, data),
			axios.post(ENTITIES_API, data)
		])

		let comprehenceResults = {};
		comprehenceResults.language = comprehenceData[0].data;
		comprehenceResults.sentiment = comprehenceData[1].data;
		comprehenceResults.entities = comprehenceData[2].data;

		console.log(comprehenceResults)

		setResults(comprehenceResults);
		setIsLoading(false);
	};

	return (
		<div className='app'>
			<div className='main'>
				<Header />
				<div className='interface'>
					<Input onUserSubmit={handleUserSubmit} onUserUpload={handleUserUpload} />
					<Results results={results} isLoading={isLoading} />
				</div>
			</div>
		</div>
	);
};

export default App;
