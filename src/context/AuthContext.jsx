import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Charger l'utilisateur persistant
  useEffect(() => {
    const raw = localStorage.getItem("dc_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  // Persister à chaque changement
  useEffect(() => {
    if (user) localStorage.setItem("dc_user", JSON.stringify(user));
    else localStorage.removeItem("dc_user");
  }, [user]);

  const login = async ({ email, password }) => {
    // Demo: accepte tout ; en vrai: appel API
    if (!email || !password) throw new Error("Email et mot de passe requis");
    // Simule un nom depuis l'email
    const name = email.split("@")[0];
    setUser({ name, email });
  };

  const register = async ({ name, email, password }) => {
    if (!name || !email || !password) throw new Error("Tous les champs sont requis");
    // Demo: en vrai tu appelles une API puis login auto
    setUser({ name, email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
