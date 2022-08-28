import "../templates/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="full_header">
      <div className="header">
        <div className="home">
          <Link to="/">HOME</Link>
        </div>
        <div className="news">
          <Link to="/News">NEWS</Link>
        </div>
        <div className="shop">
          <Link to="/shop">SHOP</Link>
        </div>
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
