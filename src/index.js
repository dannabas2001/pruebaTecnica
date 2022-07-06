import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import './index.css';
import { store } from './Redux/store/store';
import AppRoutes from './Routes/AppRoutes';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = { store }>
    <AppRoutes/>
  </Provider>
);


