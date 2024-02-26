import React from 'react';
import './App.css';
import 'tachyons';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Tools from './components/Tools';

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
        <Tools />
        <Footer />
    </div>
  );
}

export default App;
