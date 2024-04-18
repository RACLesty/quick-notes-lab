import React, { useState } from 'react';
import NoteCard from "../../components/NoteCard/NoteCard";
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };
 
  return (
    <div>
      <h2>My Notes</h2>
      <NewNoteForm addNote={addNote} />
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <NoteCard key={index} note={note} onDelete={() => deleteNote(index)} />
            <hr />  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


