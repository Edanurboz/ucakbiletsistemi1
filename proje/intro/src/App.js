

import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import './css/login.css'
import './css/signup.css';
import Booking from './booking';
import './css/booking.css';
import Odeme from './odeme';
import './css/odeme.css'
import Mesaj from './mesaj';
const App = () => {
  
  return (
    <div>
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/odeme" element={<Odeme/>} />
        <Route path="/mesaj" element={<Mesaj/>} />
        
      </Routes>

    </Router>
    </div>
    
  
  );
};

export default App;










