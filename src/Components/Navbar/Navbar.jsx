import { useState } from 'react';
import './Navbar.css'
import cartIcon from '../../assets/images/carte-de-shopping.png'
import defaultUser from '../../assets/images/avatar.png'

export default function Navbar() {

    const [user, setUser] = useState(null);
    const handleLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: 'Jean Dupont',
                photoURL: 'https://randomuser.me/api/portraits/men/75.jpg',
            });
        }
    };

    return (
    <div className="navbar">
        <div className="navContainer">
            <div className="left">
            <button
                id="return"
                className="return button arrow-button arrow-left"
                aria-label="Arrow button">
            </button>
            </div>
            <h1 className="titre">DeliveCROUS</h1>
            <div className="right">
                    <button className="profileButton" onClick={handleLogin}>
                        <img
                            src={user ? user.photoURL : defaultUser}
                            alt="Profil"/>
                    </button>
                <button className="logoShop">
                    <img src={cartIcon}/>
                </button>
            </div>
        </div>
    </div>
    )
}
