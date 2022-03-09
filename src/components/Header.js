import { Link } from "react-router-dom"
import Button from "./Button";
//hay que añadir los links xdxd
/*<Link to={"/home"} > <button type="button" className="btn btn-primary">Home</button></Link>
            <Link to={"/login"}> <button type="button" className="btn btn-secondary">Login</button></Link>
            <Link to={"/profile/my-profile"}><button type="button" className="btn btn-danger">Profile</button></Link> */

function Header(){
    return(
        <div>
            <h1>Mi primer aplicación con React</h1>
            <Link to={"/home"}> <Button color={"primary"}>Home</Button> </Link>
            <Link to={"/login"}> <Button color={"secondary"}>Login</Button> </Link>
            <Link to={"/profile/my-profile"}> <Button color={"danger"}>Profile</Button> </Link>
        </div>
    );
}

export default Header