import React from "react"
import star from "../../public/images/star.png"

const imageContext = require.context("../../public/images", false, /\.(png|jpe?g|svg)$/);
// In JavaScript, importing an entire folder isn't directly possible using the import statement. However, you can achieve this by dynamically importing files within a folder using Webpack's require.context() (in the context of Webpack) or another bundler's similar functionality


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    const coverImg = imageContext(`./public/images/${props.item.coverImg}`);



    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* <img src={`./public/images/${props.item.coverImg}`} className="card--image" /> */}
            <img src={coverImg} className="card--image" />

            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
       
    )
}