import React, { useState, useEffect } from 'react';

import './Input.css';

const InputBox = (props) => {
	const [message, setMessage] = useState('');
	const { onUserSubmit } = props;

	const messageChange = (event) => {
		setMessage(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		onUserSubmit(message);
		setMessage('');
	};

	return (
		<form className='form' onSubmit={onFormSubmit}>
			{/* <p className='form__label'>Write a message:</p> */}
			<textarea
				name='comment'
				form='form'
				rows='10'
				resize='none'
				placeholder='Enter text here...'
				onChange={messageChange}></textarea>
			<button type='submit' className='button'>
				Submit
			</button>
		</form>
	);
};

export default InputBox;
