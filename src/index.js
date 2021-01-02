import React from 'react';
import { render } from 'react-dom';
import App from './app';

const rootElement = document.getElementById('appMountPoint');

render(<App />, rootElement);
