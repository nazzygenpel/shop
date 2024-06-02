// import React from 'react'

import Bookman from "../assets/bookman.png";
import Concrete from "../assets/concrete.png";
import Growth from "../assets/growth.png";
export default function Services() {
  return (
    <div className="container">
      <div className="innerstyle">
        <h4> Featured Products</h4>
        <h3> THE BEST SERVICES </h3>
        <p> Problems trying to resolve the conflict between </p>
      </div>

      <div className="inner">
        <img src={Bookman} alt="Bookman" />
        <h3>Easy Wins </h3>
        <p className="service-details">Get your best looking smile now!</p>
      </div>
      <div className="inner">
        <img src={Concrete} alt="Concrete" />
        <h3>Concrete</h3>
        <p className="service-details">
          Defalcate is most focused in helping you discover your most beautiful
          smile
        </p>
      </div>

      <div className="inner">
        <img src={Growth} alt="Growth" />
        <h3>Hack Growth</h3>
        <p className="service-details">
          Overcame any hurdle or any other problem.
        </p>
      </div>
    </div>
  );
}
