import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [numberOfErrors, setError] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [word, setWord] = useState("katakroker");
  const [userLetters, setUserLetters] = useState([]);

  const handleLastLetter = (e) => {
    const lastLetterValue = e.target.value;
    if (lastLetterValue.match("^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]?$")) {
      setLastLetter(lastLetterValue);
    }
    setUserLetters([...userLetters, lastLetterValue]);
  };

  const handleClick = () => {
    setError(numberOfErrors + 1);
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split("");

    return wordLetters.map((letter, index) => {
      if (letter.includes(userLetters)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  return (
    <div>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                {renderSolutionLetters()}
                {/*<li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
  <li className="letter">r</li>*/}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>

            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={lastLetter}
                onChange={handleLastLetter}
              />
            </form>
          </section>

          <section className={`dummy error-${numberOfErrors}`}>
            {" "}
            {/* se pinta una línea por cada error */}
            <button onClick={handleClick}>Incrementar</button>{" "}
            {/* Boton para incrementar el número de errores. Ponemos evento para escuchar cuándo se hace click */}
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
