import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Whiteboard from './components/Whiteboard';
import Auth from './components/Auth';
import ImagePrediction from './components/ImagePrediction';
import { AuthContext, AuthProvider } from './context/AuthContext';
import keycloak from './services/keycloak';

const App: React.FC = () => {
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      if (!authenticated) {
        keycloak.login();
      }
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            {authenticated ? (
              <>
                <Route path="/whiteboard" element={<Whiteboard />} />
                <Route path="/image-prediction" element={<ImagePrediction />} />
              </>
            ) : (
              <Route path="/" element={<Auth />} />
            )}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
