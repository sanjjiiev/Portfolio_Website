import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

AOS.init();
