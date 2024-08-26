import React, { createContext, useEffect, useState } from 'react';
import keycloak from '../services/keycloak';

interface AuthContextType {
  authenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>({ authenticated: false });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      setAuthenticated(authenticated);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
