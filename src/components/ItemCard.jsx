/* eslint-disable react/prop-types */
export default function ItemCard({
  img,
  itemName,
  itemDescription,
  itemPrice,
  unitPrice,
}) {
  return (
    <div className="bestseller-imageone">
      <div className="card">
        <img src={img} alt="Lampstand" />
      </div>
      <h5 className="prop"> {itemName}</h5>
      <p className="p-styles">{itemDescription} </p>
      <div className="flex item-prices">
        <p> {itemPrice} </p>
        <p> {unitPrice}</p>
      </div>
    </div>
  );
}
