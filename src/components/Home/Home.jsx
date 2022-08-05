import { useContext } from "react";
import { AuthContext } from "../../context/Providers/AuthContext";
import styles from "./Home.module.css";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={`flex-cc ${styles.container}`}>
      <h1>Home Component</h1>
      <div className={styles.card}>
        <div>
          <h2>Login Details:</h2>
          <p>Login details from AuthContext - user state</p>
        </div>
        {user ? (
          <div>
            <h3>User is logged in.</h3>
            <span>
              <b>Name : </b>
              {user.name}
            </span>
            <br />
            <span>
              <b>Email : </b>
              {user.email}
            </span>
          </div>
        ) : (
          <h3>User is Logged out</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
