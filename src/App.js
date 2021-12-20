
import './App.css';

function App() {
  return (
    <thead className='thed'>
      <tr>
        <td colSpan="4"><button id="resultado" className="SIETE">0</button></td>
      </tr>
      <tr>
        <td><button onClick={() => add('1')}>1</button></td>
        <td><button onClick={() => add('2')}>2</button></td>
        <td><button onClick={() => add('3')}>3</button></td>
        <td><button onClick={() => add('+')}>+</button></td>
      </tr>
      <tr>
        <td><button onClick={() => add('4')}>4</button></td>
        <td><button onClick={() => add('5')}>5</button></td>
        <td><button onClick={() => add('6')}>6</button></td>
        <td><button onClick={() => add('-')}>-</button></td>
      </tr>
      <tr>
        <td><button onClick={() => add('7')}>7</button></td>
        <td><button onClick={() => add('8')}>8</button></td>
        <td><button onClick={() => add('9')}>9</button></td>
        <td><button onClick={() => add('*')}>X</button></td>
      </tr>
      <tr>
        <td colSpan="3"><button onClick={() => add('0')}>0</button></td>
        <td colSpan="3"><button onClick={() => add('%')}>%</button></td>          
      </tr>
      <tr>
        <td colSpan="2"><button onClick={() => del()} className="ac">delete/borrar</button></td>
        <td><button onClick={() => add('.')}>.</button></td>
        <td><button onClick={() => calc()}>=</button></td>            
      </tr>
      </thead>
  );
}
function setResultado(value) {
  document.getElementById('resultado').innerHTML = value;
}
function getResultado() {
  return(document.getElementById('resultado').innerHTML);
}
function add(key) { 
  var resultado = getResultado();
  if (resultado!=='0' || isNaN(key)) setResultado(resultado + key);
  else setResultado(key);
}
function calc() {
  
  var resultado = eval(getResultado()); 
  setResultado(resultado);
}
function del() { 
  setResultado(0);
}


export default App;

