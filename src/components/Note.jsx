import React from 'react';
import './All.css';
import { MdDelete } from "react-icons/md";

const Note = ({ title, content, onDelete }) => {
  return (
    <div className="file">
      <h2>{title}</h2>
      <p>{content}</p>
      <MdDelete className="delete" onClick={onDelete} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Note;
