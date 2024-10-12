import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Home from "./components/Home";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
