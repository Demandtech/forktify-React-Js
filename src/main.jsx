import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecipeProvider } from './context'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>
)
