import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './styles/mainIconStyle.css'
import './index.css'
import IconComponent from './components/MainComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IconComponent />
  </React.StrictMode>,
)
