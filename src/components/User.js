import "./user.css";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const User = (props) => {
  console.log("namesAre:", props);

  return (
    <div className="box">
      <FontAwesomeIcon icon={faCircleUser} size="4x" />
      {props.info.name && <h3>{props.info.name}</h3>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </p>
    </div>
  );
};
export default User;
