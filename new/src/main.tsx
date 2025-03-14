import React from 'react'
import './App.css'
import { App } from './App'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ApprenticeJobPosting } from './apprentice'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apprentice" element={<ApprenticeJobPosting />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
