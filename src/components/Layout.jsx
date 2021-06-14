import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => (
  <header>
    <Button
      label="log out"
      handleClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    />
    <nav>
      <ul>
        <li>
          <Link to="/">MainPage</Link>
        </li>
        <li>
          <Link to="/sign-in">SignInPage</Link>
        </li>
        <li>
          <Link to="/profile">ProfilePage</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Layout = () => (
  <div>
    <Header />
  </div>
);

export default Layout;
