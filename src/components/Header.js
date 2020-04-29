import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = ({ history }) => {
  console.log(history);
  return (
    <div
      className="ui red inverted pointing menu"
      style={{ color: "white", padding: 5 }}
    >
      <Link to="/" className="item" style={{ fontSize: 20, fontWeight: 600 }}>
        Movie Zone
      </Link>
      <div className="right menu">
        <SearchBar className="item" history={history} />
      </div>
    </div>
  );
};

export default Header;
