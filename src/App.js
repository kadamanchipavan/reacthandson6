import React from 'react';

import Navigation from './Components/Navigation'
import Edit from './Components/Edit';
import Students from './Components/Student';
import AddStudents from './Components/AddStudents';
import './App.css';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<ContactUs/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/AddStudents" element={<AddStudents/>}/>
   </Routes>
    </div>
  );
}

export default App;
