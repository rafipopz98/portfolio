import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>,
)
