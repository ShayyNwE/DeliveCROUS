import './ProductCard.css'

export default function ProductCard({ image, title, description, price }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            {price}<span className="product-price-symbol">€</span>
          </div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </div>
  )
}