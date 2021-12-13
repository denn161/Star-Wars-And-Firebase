import React from 'react';
import { render } from 'react-dom';

import '@styles/index.css';
import App from '@containers/App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
