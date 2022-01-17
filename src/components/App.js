import '../styles/App.scss';
import { useState } from 'react';

//1. Pintar los guiones de la solución (fase 1)
//2. Modificar un array del estado
//3. Pintar los guiones de la solución (fase 2)
//4. Pintar las letras falladas
//5. Pintar el muñeco
function App() {
  //Estados
  const [numberOfErrors, setError] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const handleLastLetter = (e) => {
    const lastLetterValue = e.target.value;
    // si la letra que meto es una de las indicadas entonces cambias el estado
    if (lastLetterValue.match('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]?$')) {
      setLastLetter(lastLetterValue);
    }
    if (lastLetterValue !== '') {
      setUserLetters([...userLetters, lastLetterValue]); //----- mirar devtools ""
    }
  };

  const handleClick = () => {
    setError(numberOfErrors + 1);
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      //si la letra no está en userLetters --->  li vacío
      //si la letra sí está en userLetters --->  li con esa letra
      return (
        <li key={index} className="letter">
          {userLetters.includes(letter) ? letter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const wordLetters = word.split('');
    const errorLetter = userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );

    return errorLetter.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
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
                {/* <li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
                <li className="letter">r</li> */}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                {renderErrorLetters()}
                {/* <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li> */}
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
            <button onClick={handleClick}>Incrementar</button>
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
