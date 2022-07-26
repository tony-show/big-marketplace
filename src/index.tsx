import React from 'react'
import ReactDOM from 'react-dom/client'

import '@styles/style.sass'
import App from './app'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(<App />)
