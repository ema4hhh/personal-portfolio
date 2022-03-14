import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './components/Context';


ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
