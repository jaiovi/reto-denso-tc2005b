//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const USERS = [
  {id:1, fullName:"Sara Anderson", age:12},
  {id:2, fullName:"Lopez Lopez", age:24},
  {id:1, fullName:"Jorge Mendez", age:41}
]

function App() {
  const[userName, setUserName]=useState("");//se inicializa string vacio
  const[users, setUsers]=useState([]);//array vacio

  //SUMADOR
  const[numero, setNumero] = useState(1);

  //creamos funcion para mandar a llamar usar 1
  const sumarUno = () =>{
    setNumero(numero + 1);
    console.log(numero);
  }
  //setTimeout(()=>
  useEffect(()=>{
    setUserName("LUKE")
    setUsers(USERS)
  },[userName])

  return(
    //html, recuerda poner corchetes numero
    <div className="App">
      <h1>{numero}</h1>
      <button onClick={sumarUno}>Sumar 1</button>

      {
      users.map((user)=>{
        return <div>{user.fullName}</div>
      })
      }
    </div>
  )

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
