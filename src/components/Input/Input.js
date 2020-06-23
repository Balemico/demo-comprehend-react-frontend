import React, { useState, useEffect } from 'react';

import TextArea from '../TextArea/TextArea';
import FileUpload from '../FileUpload/FileUpload';

import './Input.css';

const InputBox = (props) => {
	const [inputType, setInputType] = useState('upload');

	const { onUserSubmit, onUserUpload } = props;

	const getView = () => {
		return inputType === 'text' ?
			<TextArea onUserSubmit={onUserSubmit} /> :
			<FileUpload onUserUpload={onUserUpload} />;
	}

	const handleTextButtonClick = () => {
		setInputType('text')
	}
	const handleUploadButtonClick = () => {
		setInputType('upload')
	}

	return (
		<section className="interface__input">

			<div className="input__type">
				<button onClick={handleTextButtonClick} className={'button ' + (inputType === 'text' ? 'button--active' : '')} >Text Area</button>
				<button onClick={handleUploadButtonClick} className={'button ' + (inputType === 'upload' ? 'button--active' : '')}>Upload File</button>
			</div>
			<div className="input__area">
				{getView()}
			</div>


		</section>
	)

};

export default InputBox;
