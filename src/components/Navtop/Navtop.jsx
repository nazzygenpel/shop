import styles from "./Navtop.module.css";
import Phone from "../../assets/phone-image.png";
import Email from "../../assets/email-image.png";
import Instagram from "../../assets/insta-image.png";
import Youtube from "../../assets/youtube-image.png";
import Facebook from "../../assets/facebook-image.png";
import Twitter from "../../assets/twitter-image.png";

export default function Navtop() {
  return (
    <div>
      <header className={styles.headercontainer}>
        <div className={styles.details}>
          <section className={styles.first_section}>
            <p className={styles.contactus}>
              <img src={Phone} alt="Call on" /> (225) 555-0118
            </p>
            <p className={styles.contactus}>
              <img src={Email} alt="Email" /> glorygenpel@gmail.com
            </p>
          </section>
          <section className={styles.mid_section}>
            <p>Follow Us and get a chance to win 80% off</p>
          </section>
          <section className={styles.last_section}>
            <p>Follow Us :</p>
            <img src={Instagram} alt="Instagram" />
            <img src={Youtube} alt="Youtube" />
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
          </section>
        </div>
      </header>
    </div>
  );
}
