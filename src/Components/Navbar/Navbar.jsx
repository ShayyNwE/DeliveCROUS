import { useLocation, useNavigate, Link } from 'react-router-dom';
import cartIcon from '../../assets/images/carte-de-shopping.png';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { count } = useCart();

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="left">
          {location.pathname !== '/' && (
            <button
              id="return"
              className="return button arrow-button arrow-left"
              aria-label="Retour"
              onClick={() => navigate(-1)}
            ></button>
          )}
        </div>

        <h1 className="titre">
          <Link to="/" className="brand-link">DeliveCROUS</Link>
        </h1>

        <div className="right">
          {user ? (
            <>
              <span className="welcome">Bienvenue {user.name}</span>
              <button className="navButton" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="navLinkButton">Register</Link>
              <Link to="/login" className="navLinkButton">Login</Link>
            </>
          )}

          <Link to="/cart" className="cartButton" aria-label="Panier">
            <img src={cartIcon} alt="Panier" />
            {count > 0 && <span className="cartBadge">{count}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
