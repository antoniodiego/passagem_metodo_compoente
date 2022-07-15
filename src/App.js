import './App.css';
import Upload from "./paginas/Upload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Passando Callback</h1>

      </header>

      <div>
        <p>Veja no console o calback sendo chamado no componente pai</p>
      </div>

      <Upload></Upload>
    </div>
  );
}

export default App;
