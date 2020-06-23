import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/normalize.css';
import './styles/shared/Button.css';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
