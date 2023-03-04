import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="btn-logout" onClick={logOut}>
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/signup">SignUp</Link>
          </>
        )}
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;
