import React from 'react';

export default function NoteCard({ note, onDelete }) {
  
    const handleDelete = () => {
        if (onDelete) {
            onDelete();
          }
        };

  return (
    <div>
      <p>{note.text}</p>
      <p>{new Date(note.createdAt).toLocaleString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
