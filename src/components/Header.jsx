// import "../../src/css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";

export default function Header() {
  return (
    <div className="header">
      <div className="topHeader">
        <div>
          <h3>Bandage</h3>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faShoppingCart} />
          <FontAwesomeIcon icon={faList} />
        </div>
      </div>

      <div>
        <ul className="nav-list">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
