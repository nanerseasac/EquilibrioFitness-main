import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Advantage from '../components/Advantage'
import Prices from '../components/Prices'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Schedules from '../components/Schedules'
import CalculatorIMC from '../components/Calculator'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Advantage />
        <Prices />
        <Category />
        <Schedules />
        <CalculatorIMC />
        <Footer />
    </>
  )
}
