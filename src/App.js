import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [data, setData] = useLocalStorage("nombre", "gabriel");

  return (
    <>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <h3>{data}</h3>

    </>
  );
};

export default App;