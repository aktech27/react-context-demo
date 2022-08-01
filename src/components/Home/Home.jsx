import { useContext } from "react";
import { AuthContext } from "../../context/Providers/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      <h2>Current Login Details:</h2>
      <p>(Login details from AuthContext - user state)</p>
      {user ? (
        <h3>Logged in as : {user.email}</h3>
      ) : (
        <h3>User is Logged out</h3>
      )}
    </div>
  );
};

export default Home;
