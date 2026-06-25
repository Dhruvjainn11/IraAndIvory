import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignatureDesigns from './components/SignatureDesigns'
import Collection from './components/Collection'
import WhyChooseUs from './components/WhyChooseUs'
import OrderingProcess from './components/OrderingProcess'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureDesigns />
        <Collection />
        {/* <WhyChooseUs /> */}
        <OrderingProcess />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
