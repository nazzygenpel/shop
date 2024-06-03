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
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
