import React from 'react'
import ReactDOM from 'react-dom'

import Context from './Context'
import ThemeContext from './ThemeContext'
import { App } from './App'

ReactDOM.render(
  <Context.Provider>
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  </Context.Provider>,
  document.querySelector('#app')
)
