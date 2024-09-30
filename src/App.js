import logo from './logo.svg';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom'
import Ragistraion from './Component/Ragistration';
import Login from './Component/Login';
import Profile from './Component/profile';
import D1 from './Component/Delet';
function App() {
  return (
    <>
      <h1>Heloo</h1>
      {/* <Ragistraion></Ragistraion> */}

      <Routes>
        <Route path='/' element={<Ragistraion></Ragistraion>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/profile' element={<Profile></Profile>} ></Route>
        <Route path='/delet' element={<D1></D1>} ></Route>
      </Routes>

    </>


  );
}

export default App;
