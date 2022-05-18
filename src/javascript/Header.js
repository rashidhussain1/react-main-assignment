import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <style type="text/css"></style>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="header_left">
        <NavLink to={"/"}>
        <img
          className="header_logo"
          alt="logo"
          src="https://mma.prnewswire.com/media/1015155/HashedIn_Logo.jpg?p=twitter"
        />
        </NavLink>
      </div>

      <div className="header_right">
        <NavLink className="header_text" to={"/"}>
          {" "}
          Courses{" "}
        </NavLink>
        {/* <a className="header_text">Courses</a> */}
        <NavLink className="header_text" to={"/wishlist"}>
          My Wishlist
        </NavLink>
        <NavLink to={"/checkout"}>
          <i class="fa fa-shopping-cart fa_custom"></i>
        </NavLink>
        <NavLink to={"/user"}>
        <i class="fa fa-user"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
