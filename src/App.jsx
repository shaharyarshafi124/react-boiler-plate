import "./index.css";
import car from "./assets/car.avif"; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My React Boilerplate</h1>
      </header>
      
      <main>
        <section>
          <ul>
            <li>Text</li>
            <li>Images</li>
            <li>Links</li>
          </ul>
        </section>

        <section>
          <img src={car} alt="car" width="300" />
        </section>

        <section>
          <button onClick={() => alert("Button Clicked!")}>Click Me</button>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default App;
