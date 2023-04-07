import "./App.css";

import useLocalStorage from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      <h1>CUSTOM HOOKS</h1>
      <div className="text">
      <p>Type something in the input and the value will be automatically save in the local storage.</p>
      <p>We are doing this with the help of custom hook 'useLocalStorage'</p>
      </div>
      <input
        type={"text"}
        value={name}
        placeholder="Type something"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default App;
