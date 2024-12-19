import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';

import Local from './Component/Local';
import Editrecord from './Component/Editrecord';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Departments from './Component/Department';
import Doctor from './Component/Doctor';
import About from './Component/About';
import Contact from './Component/Contact';



function App() {
  return (
    <div className="App">
     

    

      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/department' element={<Departments/>}></Route>
            <Route path='/doctor' element={<Doctor/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
