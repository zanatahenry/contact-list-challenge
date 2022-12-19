import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/base/base'
import App from './App'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
