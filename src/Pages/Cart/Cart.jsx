import Navbar from '../../components/Navbar/Navbar'
import { useCart } from '../../context/CartContext'
import CartItem from '../../components/CartItem/CartItem'
import CartSummary from '../../components/CartSummary/CartSummary'
import './Cart.css'
import { useState } from 'react'
import AddressForm from '../../components/AddressForm/AddressForm'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { items, setQty, removeItem, clear, total } = useCart();
  const [address, setAddress] = useState({ street: '', city: '', zip: ''});
  const navigate = useNavigate();

  const isAddressValid = () => {
    const { street, city, zip } = address;
    return street.trim() && city.trim() && /^\d{5}$/.test(zip.trim());
  };

  const handleCheckout = () => {
  if (items.length === 0) return alert('Votre panier est vide.');
  if (!isAddressValid()) return alert('Merci de renseigner Rue, Ville et un code postal à 5 chiffres.');

  const orderTotal = Number(total.toFixed(2));

  const balance = 19.50;
  clear();
  navigate('/confirmation', {
    state: {
      address,
      total: orderTotal,
      balance,
    }
  });
};



  return (
    <div className="cart-page" style={{ background:'#ffffffff', minHeight:'100vh' }}>
      <Navbar />

      <main className="cart-container">
        <h2 className="cart-title">Votre panier</h2>

        {items.length === 0 ? (
          <p className="cart-empty">Votre panier est vide.</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map(item => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  qty={item.qty}
                  onQtyChange={setQty}
                  onRemove={removeItem}
                />
              ))}
            </ul>

              <AddressForm value={address} onChange={setAddress} />

            <CartSummary
              total={total}
              onClear={clear}
              onCheckout={handleCheckout}
            />
          </>
        )}
      </main>
    </div>
  );
}
