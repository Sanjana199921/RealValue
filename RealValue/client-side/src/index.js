import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Components/Header';
import MainPage from './Pages/MainPage'
import SavedListPage from './Pages/SavedLists'
import SearchResults from './Pages/searchResults'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>

  <Header/>

    <Router>
      <Routes>
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/savedLists" element={<SavedListPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>

  </React.StrictMode>
);


reportWebVitals();
