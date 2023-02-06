import "../templates/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="full_header">
      <div className="header">
        <Link to="/">
          <div className="home">HOME</div>
        </Link>
        <Link to="/News" className="nav-max">
          <div className="news">NEWS</div>
        </Link>
        <Link to="/shop" className="nav-max">
          <div className="shop">SHOP</div>
        </Link>
      </div>
      <div className="header2">
        <Link to="/login">
          <div className="login">LOGIN</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
