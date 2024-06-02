import Clock from "../assets/clock.png";
import Chat from "../assets/chats.png";
import Arrow from "../assets/arrowicon-right.png";

// eslint-disable-next-line react/prop-types
export default function FeaturedProductCard({ img }) {
  return (
    <div className="featured-product-card">
      <div>
        <img src={img} alt="Unsplash" className="featured-product-img" />
      </div>
      <div className="featured-product-details">
        <div className="featured-product-tab">
          <ul>
            <li>Google</li>
            <li>Trending</li>
            <li>New</li>
          </ul>
        </div>

        <h4 className="featured-product-header">
          {" "}
          Loudest a` la Madison #1 ({`L'integral`})
        </h4>

        <div className="featured-product-description">
          <p>
            We focus on ergonomics and meeting you where you work. ({`It's`}
            )only a keystroke away.
          </p>
        </div>
        <div className="featured-product-reviews flex space-between">
          <div className="flex">
            <img src={Clock} alt="Clock" /> <p>22 April 2021 </p>
          </div>
          <div className="flex">
            <img src={Chat} alt="Chat" /> <p>10 comments</p>{" "}
          </div>
        </div>
        <div className="featured-products-lastsection flex">
          <p>Learn More</p>
          <div>
            <img src={Arrow} alt="ArrowPointRight" />
          </div>
        </div>
      </div>
    </div>
  );
}
