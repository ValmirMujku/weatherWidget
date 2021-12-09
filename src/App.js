import Weather from "./Weather";
 

function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="border p-4 bg-dark text-warning m-5 border-danger border-3 rounded-3">
        <h1 className="text-center fs-bold text-light">Weather Widget</h1>
        <Weather />
      </div>
    </div>
  );
}

export default App;
