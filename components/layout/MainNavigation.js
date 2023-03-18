import { Link } from "react-router-dom";

import mainNavigation from "./MainNavigation.module.css";
// Here mainNavigation(object) name is up to me. Ja ecca dite parbo.
// r MainNavigation.module.css er sob mainNavigation er property

function MainNavigation() {
  return (
    <header className={mainNavigation.header}>
      <div className={mainNavigation.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
