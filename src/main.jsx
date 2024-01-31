import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'
import './index.css'
import { ConveniosPage } from "./pages/conveniosPage.jsx"
import { MedicosPage } from "./pages/medicos-page/medicosPage.jsx"
import { ExamesPage } from "./pages/examesPage.jsx"
import { NewsLetterPage } from "./pages/newsLetterPage.jsx"

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)  

root.render(
    <StrictMode>
        
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/convenios" element={<ConveniosPage />} />
            <Route path="/medicos" element={<MedicosPage />} />
            <Route path="/exames" element={<ExamesPage />} />
            <Route path="/newsLetter" element={<NewsLetterPage />} />
        </Routes>
    </Router>
    </StrictMode>
    ,)
