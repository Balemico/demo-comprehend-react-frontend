import React from 'react';

import './Input.css';

const InputBox = () => {
	return (
		<form className='form'>
			{/* <p className='form__label'>Write a message:</p> */}
			<textarea
				name='comment'
				form='form'
				rows='10'
				resize='none'
				placeholder='Enter text here...'></textarea>
			<button type='submit' className='button'>
				Submit
			</button>
		</form>
	);
};

export default InputBox;
