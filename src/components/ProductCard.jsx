// eslint-disable-next-line react/prop-types
const ProductCard = ({ backgroundImage, name }) => {
  return (
    <div
      className="product-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="texts">
        <h6> 5 Items </h6>
      </div>
      <div className="furniture">
        <h3>{name}</h3>
      </div>
      <div className="read">Read More</div>
    </div>
  );
};

export default ProductCard;
