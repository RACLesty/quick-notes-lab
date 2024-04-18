import React, { useState } from 'react';

export default function NewNoteForm({ addNote }) {
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (typeof addNote === 'function') {
      addNote({ text: newNote, createdAt: new Date().toISOString() });
      setNewNote("");
    }
  };

  const handleChange = (evt) => {
    setNewNote(evt.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={newNote} onChange={handleChange}></textarea>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}