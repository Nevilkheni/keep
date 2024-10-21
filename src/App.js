import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Keep from './components/Keep';
import Note from './components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header />
      <Keep onAddNote={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(index)}  
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
