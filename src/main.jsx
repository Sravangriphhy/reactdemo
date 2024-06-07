import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import createCounter from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={createCounter}>
    <App />
    </Provider>
  </React.StrictMode>,
)
