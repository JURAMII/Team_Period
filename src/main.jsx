import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import "./common.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={'/Team_Period/'}>
  <App />
  </BrowserRouter>
)
