import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "shani",
        "age": "25"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "sunny",
                "age": "420"
            })
        }, 2000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

