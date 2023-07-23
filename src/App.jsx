

import './App.css'
import Airbnb from "./component/Airbnb"
import Hero from "./component/Hero"
import Card from "./component/Card"
import data from "./data"

function App() {
  
    const cards = data.map(item => {
      return(
        <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
        />
      )
    })
  return (
    <>
      <Airbnb/>
      <Hero/>
      <section className='card-list'>
      {cards}
      </section>
      
   
      </>
  )
}

export default App
