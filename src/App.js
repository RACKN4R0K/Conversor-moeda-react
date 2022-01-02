import './App.css';
import Conversor from './components/conversor.js';

function App() {
  return (
    <div className="App">
      <h2 className="Titulo">Convertor de moedas atualizado</h2>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
