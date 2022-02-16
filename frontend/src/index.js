import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './Routes/index';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import './index.css';
import Login from './Components/Login';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <MainRoutes /> */}
        <Login />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
