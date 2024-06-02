import User from "../assets/user.png";
import Stars from "../assets/stars.png";
import Aboutimage from "../assets/aboutimages.png";

export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className="aboutus-header">
        <h3>What they say about us </h3>
      </div>
      <div className="aboutus-usersection">
        <div className="user-image">
          <img src={User} alt="User" />
        </div>
        <div className="aboutus-stars">
          <img src={Stars} alt="Stars" />
        </div>
        <h6>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </h6>
        <p className="Regina"> Regina Miles </p>
        <p className="designer"> Designer</p>
      </div>
      <div className="aboutus-image">
        <img src={Aboutimage} alt="AboutUsImage" />
      </div>
    </div>
  );
}
