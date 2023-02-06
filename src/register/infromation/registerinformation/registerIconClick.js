import { useState } from "react";
import "../info.css";
import RegisterInformation from "./registerinformation";

const RegisterClickIcon = ({ items }) => {
  const [isActive, setIsActive] = useState(false);

  function OpenBoxInfo() {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="register-click">
        <button
          className="button-info-img bimgr"
          onClick={OpenBoxInfo}
        ></button>
        <div className={isActive ? "information-box-reg" : "off"}>
          <RegisterInformation items={items} />
        </div>
      </div>
    </>
  );
};

export default RegisterClickIcon;
