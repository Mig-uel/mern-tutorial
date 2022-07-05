import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// contexts
import { WorkoutsProvider } from './contexts/workouts.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <WorkoutsProvider>
      <App />
    </WorkoutsProvider>
  </React.StrictMode>
)
