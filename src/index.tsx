import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    <App />
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
