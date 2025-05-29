import React from 'react'
import ReactDom from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import {Toaster}  from 'react-hot-toast'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
        position='top-right'
        reverseOrder={false}
        />
  </React.StrictMode>,
)
