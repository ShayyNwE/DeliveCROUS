import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard'
import Croissant from '../../assets/images/Croissant.webp'
import Cafe from '../../assets/images/cafe.webp'
import pain from '../../assets/images/pain.jpg'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

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
  },
  {
    id: 3,
    image: pain,
    title: 'Pain au chocolat',
    description: 'Un délicieux pain au chocolat doré',
    price: '0.90',
    allergens: ['Gluten',"Lactose","Œufs","Cacao"],
  }
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()

  if (!product) return <p>Produit introuvable</p>

  const handleAdd = () => {
    addItem(
      { id: product.id, image: product.image, title: product.title, price: product.price },
      1
    )
  }

  return (
    <div className="product-detail-page">
      <Navbar />
      <main>
        <ProductDetailCard
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          allergens={product.allergens}
          onAddToCart={handleAdd}
        />
      </main>
    </div>
  )
}
