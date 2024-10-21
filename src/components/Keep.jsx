// Keep.js
import React, { useState } from 'react';
import './All.css';
import { IoIosAdd } from "react-icons/io";

const Keep = ({ onAddNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (note.title || note.content) {
      onAddNote(note);
      setNote({ title: '', content: '' }); // Clear the input fields after submission
    }
  };

  return (
    <div className="main_note">
      <form onSubmit={submitNote}>
        <div className="any">
          <input
            type="text"
            name="title"
            placeholder="Title"
            autoComplete="off"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Write a note"
            value={note.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          <IoIosAdd className="plus_sign" />
        </button>
      </form>
    </div>
  );
};

export default Keep;
