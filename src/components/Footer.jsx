// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
export default function Footer() {
  return (
    <footer>
      <div className="upsection">
        <h3>Bandage</h3>
        <div className="img">
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
        </div>
      </div>
      <div className="Midsection">
        <ul>
          <li className="h5">
            <h3>Company Info</h3>
          </li>
          <li> About Us</li>
          <li>We are hiring</li>
          <li>Blog</li>

          <li className="h5">
            <h3>Legal </h3>
          </li>
          <li>About Us</li>
          <li>We are hiring</li>
          <li>Blog</li>

          <li className="h5">
            <h3>Features</h3>
          </li>
          <li> Business Marketing </li>
          <li>User Analytic</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>

          <li className="h5">
            <h3>Resourses</h3>
          </li>
          <li>IOS & Android</li>
          <li>Watch a Demo </li>
          <li>Customers </li>
          <li>API</li>

          <li className="h5">
            <h3>Get In Touch</h3>
          </li>
        </ul>
      </div>
      <div className="input">
        <form>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            required
          ></input>
          <button> Subscribe </button>
        </form>
        <p> Lorem imp sum dolor Amit </p>
      </div>

      <div className="Lastsection">
        <h6> Made With Love By Finland All Right Reserved </h6>
      </div>
    </footer>
  );
}
