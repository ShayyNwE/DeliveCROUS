import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard'
import Croissant from '../../assets/images/Croissant.webp'
import Cafe from '../../assets/images/cafe.webp'
import { useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    image: Croissant,
    title: 'Croissant au beurre',
    description: 'Ce croissant croustillant et doré...',
    price: '1.20',
    allergens: ['Gluten', 'Lactose', 'Œufs'],
  },
  {
    id: 2,
    image: Cafe,
    title: 'Café chaud',
    description: 'Un bon café chaud pour bien commencer la journée.',
    price: '1.00',
    allergens: [],
  }
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) return <p>Produit introuvable</p>

  return (
    <div className="product-detail-page">
      <Navbar />
      <main>
        <ProductDetailCard
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          allergens={product.allergens}
          onAddToCart={() => alert(`${product.title} ajouté au panier !`)}
        />
      </main>
    </div>
  )
}
