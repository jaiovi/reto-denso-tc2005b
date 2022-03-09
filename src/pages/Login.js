import Button from "../components/Button";

function Login(){
    //const [username, setUsername] = useState()
    const iniciarSesion=() =>{
        console.log("Iniciando sesion")
    }
    return(
        <div>
            <h1>Login</h1>
            <Button onClick={iniciarSesion} color={"$green"}>Login</Button>
        </div>
    )
}

export default Login