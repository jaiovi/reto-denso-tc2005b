import React, { useEffect } from "react";
import * as bootstrap from bootstrap;

let offcanvasId=0;

function OffCanvas(props){
    const [id,setId] = useState(0)
    useEffect(()=>{
        offcanvasId=offcanvasId+1;
        setId("offcanvasid-"+offcanvasId);
        const elemnt = document.getElementById(id);
        console.log(elemnt);
        bootstrap.OffCanvas.getOrCreateInstance(elemnt);
    })

    //Habilitar elemento. Nos permite abris offcanvas para habilitarlo y añadir funcionalidad adicional. Necesito ident
    return (
        <React.Fragment>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>
            
            <div className="offcanvas offcanvas-top" tabIndex="-1" id="{id}" aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                ...
            </div>
            </div>
        </React.Fragment>
    );
}
export default OffCanvas;