import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Article name="Firman" titles={["Reactjs", "Nextjs", "Nodejs"]} />
      <br />
      <Article name="Sasongko" titles={["Vuejs", "Nuxtjs", "Deno"]} />
    </>
  );
}

export default App;
