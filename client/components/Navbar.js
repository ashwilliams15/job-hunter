import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/networking">Networking</Link>
      <Link to="/job">Job Hunt</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/technologies">Technologies</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/journal">Journal</Link>
    </div>
  )
}

export default Navbar;
