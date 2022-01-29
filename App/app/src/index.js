import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import history from '../src/Component/utils/history'


ReactDOM.render(
  <React.StrictMode>
    <App history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);

