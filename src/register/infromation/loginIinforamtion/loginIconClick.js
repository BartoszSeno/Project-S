import { useState } from "react";
import "../info.css";
import LoginInformation from "./logininforamtion";

const LoginClickIcon = ({ items }) => {
  const [isActive, setIsActive] = useState(false);

  function OpenBoxInfo() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="login-click">
        <button className="button-info-img" onClick={OpenBoxInfo}></button>
        <div className={isActive ? "information-box" : "off"}>
          <LoginInformation items={items} />
        </div>
      </div>
    </>
  );
};

export default LoginClickIcon;
