import "./App.css";
import Home from "./pages";
import { GlobalContext } from "./context";

function App() {
  const user = {
    username: "Firman",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </>
  );
}

export default App;

// state management
//  Context -> API bawaan React
//  Zustand
//  Redux
