import React from 'react';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home'
import{Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route  path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
