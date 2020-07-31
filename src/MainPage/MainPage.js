import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import STORE from '../STORE';

class MainPage extends Component {
    render(){
        return(
            <section>
                <ul>
                    {STORE.notes.map(note =>
                        <li key ={note.id}>
                            <Link to ={`/note/${note.id}`}>{note.name}</Link>
                        </li>)}
                </ul>
            </section>
        )
    }

}


export default MainPage;