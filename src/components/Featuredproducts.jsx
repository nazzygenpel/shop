// import React from 'react'

import FeaturedProductCard from "./FeaturedProductCard";
import Unsplash from "../assets/unsplash.png";
import Finekitchen from "../assets/finekitchen.png";
import Bedroom from "../assets/bedroom.png";

export default function Featuredproducts() {
  return (
    <div className="feature">
      <div className="featured-product-text">
        <h6>Practice Advice </h6>
        <h2>Featured Products </h2>
      </div>

      <FeaturedProductCard img={Unsplash} />
      <FeaturedProductCard img={Finekitchen} />
      <FeaturedProductCard img={Bedroom} />
    </div>
  );
}
