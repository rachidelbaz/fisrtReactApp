import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/About">
        About
      </Link>
    </header>
  );
}
const linkStyle = {
  color: "#87d2de",
  textDecoration: "none",
};
const headerStyle = {
  textAlign: "center",
  backgroundColor: "#5c5150",
  padding: "4px",
  color: "#feeecf",
};
