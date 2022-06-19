import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='about' element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);