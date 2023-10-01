import './App.css';
import Example from './Example';

function App() {
  return (
    <div className="App">
    <header>
      <nav>
        <a href="index.html">About me</a>
        <a href="index.html">My current projects</a>
      </nav>
    </header>

    <h1>Innhold kommer her </h1>
    <Example message='lol'></Example>

    <footer>
      <p>Måter du kan kontakte meg på: </p>
      <a href="mailto:erlinhol@uio.no">Mail</a>
    </footer>
    </div>
  );
}

export default App;
