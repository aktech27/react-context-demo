import { useContext } from "react";
import { AuthContext } from "../../context/Providers/AuthContext";
import Logo from "../../assets/react.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  //Using the Auth Context
  const { user, dispatch } = useContext(AuthContext);

  //Login -> Payload is Object type
  const handleGuestLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: { email: "test@guest.com", name: "Guest" },
    });
  };
  const handleAdminLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: { email: "admin@guest.com", name: "Admin" },
    });
  };

  //Logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  //return the list li elements based on Auth Context -> user State
  //If user state is not present then show Login links
  //If user state is present then show Logout link
  const returnAuthNavList = () => {
    if (!user) {
      return (
        <>
          <li onClick={handleGuestLogin}>Login(Guest)</li>
          <li onClick={handleAdminLogin}>Login(Admin)</li>
        </>
      );
    } else {
      return <li onClick={handleLogout}>Logout</li>;
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul className={`flex-cc ${styles.navList}`} role="list  ">
        <div>
          <img src={Logo} alt="Logo" height={30} />
        </div>
        <div className={styles.mainNavList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </div>
        <div className={styles.authNavList}>
          {returnAuthNavList()}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
