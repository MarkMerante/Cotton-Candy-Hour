import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route,useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Shop from './components/pages/Shop'
import Services from './components/pages/Services'
import SpecialOccasions from './components/pages/SpecialOccasions'
import Fundraising from './components/pages/Fundraising'
import Carnival from './components/pages/Carnival'
import FAQ from './components/pages/FAQ'
import Flavours from './components/pages/Flavours'
import Events from './components/pages/Events'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import ClassicProduct from './components/pages/ClassicProduct'
import SpecialsProduct from './components/pages/SpecialsProduct'
import CartSlideIn from './components/CartSlideIn'
import Cart from './components/Cart'
import ConfirmationPage from './components/ConfirmationPage'
import Footer from './components/Footer'

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  console.log(cart)

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newItem = { ...item, id: uuidv4() }
      return [...prevCart, newItem]
    })
  }

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }
  
  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart');
  }

  const handleClick1 = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <Navbar size={cart.length} handleClick1={handleClick1}/>
        <ScrollToTopOnPageChange />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop addToCart={addToCart}/>} />
          <Route path='/confirmation' element={<ConfirmationPage />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} />
          <Route path='/classic/:classicsID' element={<ClassicProduct addToCart={addToCart}/>} />
          <Route path='/special/:specialsID' element={<SpecialsProduct addToCart={addToCart}/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/special-occasions' element={<SpecialOccasions />} />
          <Route path='/services/fundraising' element={<Fundraising />} />
          <Route path='/services/carnival' element={<Carnival />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/flavours' element={<Flavours />} />
          <Route path='/events' element={<Events />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <CartSlideIn isOpen={isOpen} handleClick1={handleClick1} cart={cart} removeFromCart={removeFromCart} />
        <Footer />
      </Router>
    </>
  )
}

export default App;
