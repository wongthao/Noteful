import React from 'react';
import STORE from '../STORE';




export default function NotePage (props) {
    const note = STORE.notes.find(n =>
    n.id === props.match.params.noteId)
        return(
            <article>
                <h2>{note.name}</h2>
                {note.content}
                
            </article>
        )
    }




