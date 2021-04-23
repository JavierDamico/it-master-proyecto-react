// import logo from "./logo.svg";
// import "./App.css";
import "./index.css";
import hamburguesa from "./hamburguesa.svg";
import logo from "./logo.png"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="first-nav">
        <a href="#footer">Sign in</a> or
        <a href="#footer">create an account</a>
      </div>
      <div id="second-nav">
        <img className="logo" src={logo} alt="Logo Google" />
        <div className="second-nav-menu">
          <div className="second-nav-hamburger">
            <img src={hamburguesa} alt="" />
          </div>

          <div className="second-nav-links"></div>
        </div>
      </div>
      <div id="banner">
        <div className="overlay">
          <h1>Lorem Ipsum</h1>
          <button>Learn more</button>
        </div>
      </div>
      <div id="items"></div>
      <div className="paginacion">Ver mas productos</div>
      <div id="footer">
        <p>Suscribite al newsletter</p>
        <form action="" method="post">
          <input type="text" />
          <button>Enviar</button>
        </form>
      </div>
      <div className="cookie">
        En esta pagina utilizamos cookies para brindarle un mejor servicio.
        <a href="#">Aceptar</a>
      </div>
    </div>
  );
}

export default App;
