import { AuthContextProvider } from "./Providers/AuthContext";
import { CounterContextProvider } from "./Providers/CounterContext";
import { ThemeContextProvider } from "./Providers/ThemeContext";

// Create a context wrapper to enclose all Context into one.
//Just doing this to better looking code, when there are multiple context.
const ContextWrapper = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <CounterContextProvider>{children}</CounterContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default ContextWrapper;
