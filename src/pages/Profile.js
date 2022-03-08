import { useParams } from "react-router-dom"

function Profile(){
    const params = useParams();

    return(
        <div>
            <h1>Profile de {params.userId}</h1>
        </div>
    )
}

export default Profile