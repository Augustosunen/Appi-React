import React, {useContext} from "react";
import MiContexto from "./MiContexto";

const Input= () => {
    const {setName} = useContext(MiContexto)
    return (
        <div>
            <input onChange = {(e) => setName(e.target.value)}/>
        </div>
        )
}

export default Input