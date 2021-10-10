import { useState } from "react";
import updateContext from "./updateContext";


const UpdateState = (props) => {

    const [update, setUpdate] = useState({})

    const updateValue = (post)=>{
        setUpdate(post);
    }


                return (
        <updateContext.Provider value={{update , updateValue}}>
            {props.children}
        </updateContext.Provider>
    )
}

export default UpdateState;