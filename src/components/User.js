import "./user.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = () => {
  return (
    <div className="box">
      <FontAwesomeIcon icon={faUser} size="4x" />
      <h3>Customer Name</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
    </div>
  );
};
export default User;
