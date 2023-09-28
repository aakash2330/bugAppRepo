import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import customTheme from './customTheme/customTheme.ts';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <RecoilRoot>
      <ThemeProvider theme={customTheme}>
    <App />
    </ThemeProvider>
    </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)
