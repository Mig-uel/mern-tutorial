import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// contexts
import { WorkoutsProvider } from './contexts/workouts.context'
import { AuthContextProvider } from './contexts/auth.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsProvider>
        <App />
      </WorkoutsProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
