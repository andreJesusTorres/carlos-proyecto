import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1em', background: '#333', color: '#fff' }}>
            <ul style={{ display: 'flex', gap: '1em', listStyle: 'none', margin: 0 }}>
                <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
                <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link></li>
                <li><Link to="/posts" style={{ color: '#fff', textDecoration: 'none' }}>Posts</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
