import "./App.css";
import Header from "./components/Header";
import LoginPage from "./pages/(auth)/signin/LoginPage";
import HomePage from "./components/HomePage";
import JogosPage from "./components/JogosPage";
import SobrePage from "./components/SobrePage";
import ContatosPage from "./components/ContatosPage";
import CadastroPage from "./pages/(auth)/signup/SignUp";
import { supabase } from "./lib/supabaseClient";
import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true); // loading inicial

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log("Supabase session carregada:", session); // debug opcional
      if (session) {
        setIsLoggedIn(true);
      }
      setIsLoadingAuth(false); // auth verificada, libera app
    }
    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  if (isLoadingAuth) {
    return <div>Carregando autenticação...</div>; // ou spinner bonitão
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/jogos"
            element={
              <PrivateRoute>
                <JogosPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contatos"
            element={
              <PrivateRoute>
                <ContatosPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/sobre"
            element={
              <PrivateRoute>
                <SobrePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
