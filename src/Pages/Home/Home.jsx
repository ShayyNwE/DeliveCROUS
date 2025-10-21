import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import Croissant from '../../assets/images/Croissant.webp'
import Cafe from '../../assets/images/cafe.webp'

const products = [
  {
    id: 1,
    image: Croissant,
    title: 'Croissant au beurre',
    description: 'Un délicieux croissant croustillant et doré.',
    price: '1.20'
  },
  {
    id: 2,
    image: Cafe,
    title: 'Café chaud',
    description: 'Un bon café pour bien démarrer la journée.',
    price: '1.00'
  }
]

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <main className="home-content">
        <h2 className="section-title">Nos produits</h2>

        <div className="product-list">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-link"
            >
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
