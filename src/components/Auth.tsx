import React from 'react';
import keycloak from '../services/keycloak';

const Auth: React.FC = () => {
  return (
    <div className="auth-container">
      <h1>Welcome to Collaborative Whiteboard</h1>
      <button onClick={() => keycloak.login()}>Login with Keycloak</button>
    </div>
  );
};

export default Auth;
