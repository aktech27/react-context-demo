import { useContext } from "react";
import { ThemeContext } from "../../context/Providers/ThemeContext";

const Settings = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div>
      <h1>
        Settings<p>Current Theme is : {theme}</p>
        <div>
          <button onClick={handleClick}>Change Theme</button>
        </div>
      </h1>
    </div>
  );
};

export default Settings;
