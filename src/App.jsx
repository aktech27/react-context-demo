import Navbar from "./components/Navbar/Navbar";
import { Routing } from "./Routing/Routing";
import ContextWrapper from "./context/ContextWrapper";

function App() {
  return (
    <>
      <ContextWrapper>
        <Navbar />
        <Routing />
      </ContextWrapper>
    </>
  );
}

export default App;
