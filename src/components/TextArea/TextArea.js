import React, { useState } from 'react';

import './TextArea.css';

const TextArea = (props) => {
  const [message, setMessage] = useState('');
  const { onUserSubmit } = props;

  const onFormSubmit = (event) => {
    event.preventDefault();
    onUserSubmit(message);
    setMessage('');
  };

  const messageChange = (event) => {
    setMessage(event.target.value);
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
      <button type='submit' className='button' disabled={!message}>
        Submit
			</button>
    </form>
  )
}


export default TextArea;