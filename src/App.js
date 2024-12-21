import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import data from "./data.js"

console.log(data)


export default function App() {
    const cards = data.map (item => {
        return (
            <Card 
            key={item.id}
            item={item}
            />
        )
    })

    return (
        <div class="mobile-container">
            <Navbar />
             <Hero />
            <section className="cards-list">
            {cards}
            </section>
        </div>
    )
}