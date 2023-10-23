import react from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const state = {
        "name" : "Dinkar",
        "class" : "5b"
    }
    return(
        <NoteContext.provider value = {state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;