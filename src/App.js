import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Homesec from './pages/Homesec';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homesec/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        
      </Routes> 
      {/* <Home/> */}
     
    </div>
  );
}

export default App;
