// import React from "react";
import Lotion from "../assets/lotion.png";
import Flower from "../assets/flower-pot.png";
import Lamp from "../assets/lamp.png";
import Pots from "../assets/whitepots.png";
import ProductDisplayCard from "./ProductDisplayCard";

export default function Mobilehero() {
  return (
    <div className="images">
      <ProductDisplayCard
        backgroundImage={Lotion}
        name="FURNITURE"
      ></ProductDisplayCard>
      <ProductDisplayCard
        backgroundImage={Flower}
        name="FURNITURE"
      ></ProductDisplayCard>
      <ProductDisplayCard
        backgroundImage={Lamp}
        name="FURNITURE"
      ></ProductDisplayCard>
      <ProductDisplayCard
        backgroundImage={Pots}
        name="FURNITURE"
      ></ProductDisplayCard>
    </div>
  );
}
