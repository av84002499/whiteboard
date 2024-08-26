import React from 'react';
import { Link } from 'react-router-dom';
import keycloak from '../services/keycloak';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/whiteboard">Whiteboard</Link>
        <button className="btn btn-danger" onClick={() => keycloak.logout()}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
