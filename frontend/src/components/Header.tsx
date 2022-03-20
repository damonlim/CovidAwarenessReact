import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <div className="App">
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Declaration Form
        </NavLink>
        {" | "}
        <NavLink to="/report" activeStyle={activeStyle}>
          Report
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
