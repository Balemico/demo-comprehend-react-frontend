import React, { useState, useEffect } from 'react';

import './Results.css';

const Results = (props) => {
	const [results, setResults] = useState('');
	const { message } = props;

	useEffect(() => {
		setResults(message);
	}, [message]);

	return (
		<div className='results'>
			{results && (
				<div>
					<h2>{results}</h2>
				</div>
			)}
		</div>
	);
};

export default Results;
