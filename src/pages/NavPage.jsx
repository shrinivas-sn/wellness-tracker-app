import { NavLink } from "react-router-dom";
import styles from "./NavPage.module.css";
export default function NavPage() {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink className={styles.navbtn} to="/">
          Home
        </NavLink>
      </div>
      <div className={styles.navlist}>
        <NavLink className={styles.navbtn} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className={styles.navbtn} to="/profile">
          Profile
        </NavLink>
        <NavLink className={styles.navbtn} to="/history">
          History
        </NavLink>
        <NavLink className={styles.navbtn} to="/logactivity">
          LogActivity
        </NavLink>
      </div>
    </nav>
  );
}
