import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Home from './page/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Alert from './component/AlertBox/Alert';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Alert />
      <Routes>
         <Route path="/" element={<Home />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App