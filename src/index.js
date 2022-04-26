import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demos from './components/Demos';
import Merch from './components/Merch';
import Music from './components/Merch';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/DEMOS" element={<Demos/>} />
        <Route path="/MUSIC" component={<Music/>} />
        <Route path="/MERCH" component={<Merch/>} />

      </Routes>
    </Router>
  </React.StrictMode>
);