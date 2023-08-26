import "./App.css";
import Home from "./pages";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  const user = {
    username: "Firman",
  };
  return (
    <>
      <GlobalContext.Provider value={user}>
        {/* <Home /> -> Home dihapus karena sudah dipindahkan kedalam router */}
        {/* FYI: semua component yg berada dalam RouterProvider akan dihandle oleh React Router */}
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;

// state management
//  Context -> API bawaan React
//  Zustand
//  Redux
