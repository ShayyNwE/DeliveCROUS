import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import Croissant from '../../assets/images/Croissant.webp'
import Cafe from '../../assets/images/cafe.webp'
import Pain from '../../assets/images/Pain.jpg'

const products = [
  {
    id: 1,
    image: Croissant,
    title: 'Croissant au beurre',
    description: 'Un délicieux croissant croustillant et doré.',
    price: '0.80'
  },
  {
    id: 2,
    image: Cafe,
    title: 'Café chaud',
    description: 'Un bon café pour bien démarrer la journée.',
    price: '1.00'
  },
  {
    id: 3,
    image: Pain,
    title: 'Paint au chocolat',
    description: 'Un délicieux pain au chocolat doré.',
    price: '0.90'
  }
]

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <main className="home-content">
        <h2 className="section-title">La carte</h2>

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
