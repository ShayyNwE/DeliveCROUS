import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import "./auth.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(form);
      navigate("/");
    } catch (err) {
      setError(err.message || "Erreur d'inscription");
    }
  };

  return (
    <div className="auth-page">
      <Navbar />
      <main className="auth-container">
        <h2 className="auth-title">Créer un compte</h2>
        <form className="auth-form" onSubmit={onSubmit}>
          {error && <div className="auth-error">{error}</div>}

          <label>
            Nom
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
              required
              placeholder="Jean Dupont"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
              required
              placeholder="jean@exemple.com"
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

          <button className="auth-submit" type="submit">Créer le compte</button>
        </form>

        <p className="auth-alt">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </main>
    </div>
  );
}
