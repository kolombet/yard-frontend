/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const fontConfig = {
  google: {
    families: ['Fira Sans:300,400,500,600', 'Philosopher:400,700'],
  },
};
WebFont.load(fontConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
