import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import "./auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError(err.message || "Erreur de connexion");
    }
  };

  return (
    <div className="auth-page">
      <Navbar />
      <main className="auth-container">
        <h2 className="auth-title">Connexion</h2>
        <form className="auth-form" onSubmit={onSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
              required
              placeholder="ex: jean@exemple.com"
            />
          </label>

          <label>
            Mot de passe
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm(f => ({ ...f, password: e.target.value }))}
              required
              placeholder="••••••••"
            />
          </label>

          <button className="auth-submit" type="submit">Se connecter</button>
        </form>

        <p className="auth-alt">
          Pas de compte ? <Link to="/register">Créer un compte</Link>
        </p>
      </main>
    </div>
  );
}
