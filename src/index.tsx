import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ThemeGrommet from './utils/ThemeGrommet'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeGrommet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeGrommet>
)
