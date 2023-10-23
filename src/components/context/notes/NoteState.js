import react from 'react';
import noteContext from './NoteContext';

const NoteState = (props) => {
    const state = {
        "name" : "Dinkar",
        ""
    }
    return(
        <NoteState.provider value = {state}>
            {props.children}
        </NoteState.provider>
    )
}

export default NoteState;