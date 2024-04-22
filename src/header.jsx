import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>logo</h2>
      <nav className="flex gap-4">
        <Link to={"/"}>home </Link>
        <Link to={"/about"}>about </Link>
        <Link to={"/contact"}>contact </Link>
        <Link to={"/portfolio"}>portfolio </Link>
      </nav>
      <button>login</button>
    </div>
  );
};
export default Header;
