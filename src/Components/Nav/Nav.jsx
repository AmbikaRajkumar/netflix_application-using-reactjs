import "./Nav.css";
import Search from "../Search";
function Nav() {
  return (
    <div className="nav">
      <div className="nav_logo">
        <img
          className="nav_logo_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="NetFlis Logo"
        />
      </div>

      <ul className="nav_links">
        <li className="nav_link">Home</li>
        <li className="nav_link">Tv Shows </li>
        <li className="nav_link">Movies</li>
        <li className="nav_link">Latest</li>
        <li className="nav_link">My List</li>
      </ul>

      <Search />
    </div>
  );
}
export default Nav;
