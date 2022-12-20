import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/base/base'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
)
