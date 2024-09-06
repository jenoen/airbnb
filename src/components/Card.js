import React from "react"
import KatieImage from "../images/katie-zaferes.png"
import star from "../images/star.png"


/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <section>
        <div className ="card">
            <img className="card--image" src={KatieImage} alt="Image of Katie Zaferes" />
            <div className="card--stats">
                <img className  ="card--star" src={star} alt="star icon" />
                <span>5.0</span>
                <span className="grey">(6) • </span>
                <span className="grey">USA</span>
             </div>
             <h2>Life Lessons with Katie Zaferes</h2>
            <p>From $136 / person</p>
        </div>
        </section>
    )
}