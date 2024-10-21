import React from 'react';
import './All.css';
import { FaStickyNote } from "react-icons/fa";

const Header = () => {
    return (
        <div className='header'>
            <FaStickyNote style={{ height: '40px', width: 'auto', padding: '10px' }} />
            <h1>Notes</h1>
        </div>
    );
};

export default Header;
