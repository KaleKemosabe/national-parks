import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import {HikeProvider} from './Context';

ReactDOM.render(
  <HikeProvider>
    <Router>
      <App />
    </Router>
  </HikeProvider>,
  document.getElementById('root')
);
