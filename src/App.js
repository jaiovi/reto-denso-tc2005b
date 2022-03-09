//import logo from './logo.svg';
//import './App.css';
import "./assets/scss/app.scss"
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Header from './components/Header';


const USERS = [
  {id:1, fullName:"Sara Anderson", age:12},
  {id:2, fullName:"Lopez Lopez", age:24},
  {id:1, fullName:"Jorge Mendez", age:41}
]

function App() {
  const[userName, setUserName]=useState("");//se inicializa string vacio
  const[users, setUsers]=useState([]);//array vacio
  const[numero, setNumero] = useState(1);
  const[loading, setLoading] = useState(false);

  //creamos funcion para mandar a llamar usar 1
  const sumarUno = () =>{
    setNumero(numero + 1);
    console.log(numero);
  }
  useEffect(()=>{
    //OJO AQUI 8 Marzo añadir setLoading
    setLoading(true);
    setUserName("LUKE");
    setTimeout(()=>{
      setUsers(USERS);
      setLoading(false);
    },3000);
  },[]);

  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/profile/:userId' element={<Profile/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='' element={<Navigate to="/home" replace={true}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
