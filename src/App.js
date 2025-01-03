import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Header from './components/header';
import Footer from './components/footer';
import Quiz from './components/quiz';
import EndScreen from './components/endscreen';
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/endscreen" element={<EndScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
