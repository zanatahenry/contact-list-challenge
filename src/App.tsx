import React from 'react'
import Home from './views/Home/Home'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './utils/colors'

function App () {
  return (
    <ThemeProvider theme={themeDefault}>
      <Home />
    </ThemeProvider>
  )
}

export default App
