import styles from "./Navmain.module.css";
import Dropdown from "../../assets/dropdown.png";
import Person from "../../assets/person-icon.png";
import Search from "../../assets/thesearch.png";
import Cart from "../../assets/thecart.png";
import Love from "../../assets/love.png";
import { useState } from "react";
import classNames from "classnames";
import Searchicon from "../../assets/searchicon.svg";
import shopcart from "../../assets/shopcart.svg";
import toggle from "../../assets/toggle.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.headercontainer}>
      <section className={styles.title}>
        <h3>Bandage</h3>
      </section>
      <section className={styles["navli"]}>
        <ul className={styles["nav-list-item"]}>
          <li>Home</li>
          <li>
            Shop <img src={Dropdown} alt="Add to Cart" />
          </li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
        <ul className={classNames(styles.signup, styles.list_items)}>
          <li>
            <img src={Person} alt="Person" /> Login / Register
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Cart} alt="Cart" /> 1
          </li>
          <li>
            <img src={Love} alt="Love" /> 1
          </li>
        </ul>
      </section>
      <section className={styles["menu"]}>
        <img src={Searchicon} alt="Click to search" />
        <img src={shopcart} alt="Add to cart" />
        <img src={toggle} alt="toggle menu" onClick={toggleMenu} />
      </section>
      <ul
        className={classNames(styles.toggle_items, {
          [styles["is-open"]]: isOpen,
        })}
      >
        <li>Home</li>
        <li>Product</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
