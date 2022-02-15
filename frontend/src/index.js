import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import MainRoutes from './Routes';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import './index.css';
import Tasks from './Components/Tasks';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router>
        <MainRoutes />
      </Router> */}
    <Tasks></Tasks>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
