import './App.css';
import Login from './Login';

function App() {
  return (
    <>
      <header className="App-header">
        UD4D login test
      </header>
      <div className='content'>
        <div className='assignment'>
          Zadanie: 
          <p>V TypeScriptu pomocí frameworku React vytvořte uživatelské rozhraní pro přihlašování. Tento
          formulář bude obsahovat 2 vstupní inputy (uživatelské jméno a heslo). Formulář bude kontrolovat
          správnost uživatelských údajů již na klientovi (tzv. není potřeba odesílat na backend). Validní
          uživatelské jméno může obsahovat pouze malá písmena bez diakritiky, číslice 0 až 9, tečku, pomlčku
          a musí obsahovat právě jeden zavináč. Minimální délka uživatelského jména před zavináčem musí
          být 5 znaků. Minimální délka hesla je 6 znaků.
          Po odeslání formuláře (použijte RESTful API nebo GraphQL) se uživateli zobrazí, zda se mu podařilo
          přihlásit či nikoliv. Pro tyto účely si můžete udělat jednoduchý backend, mock backend nebo
          libovolné jiné řešení. Stačí mít natvrdo nadefinovaná správná jména a hesla (není potřeba vytvářet
          žádnou databázi).
          Vzhled formuláře, způsob kontroly a styl zápisu kódu je čistě na Vás. Doporučujeme použít knihovnu
          Material UI.
          Pokud by něco v zadání nebylo jasné, tak to můžete popsat v README spolu s variantou, kterou jste
          nakonec implementovali.
          </p>
          <p> Ukázka validního uživatelského jména:</p>
          <ul>
            <li>jolanda@ud4d.com</li>
            <li>frontend-pozice@ud4d-bez-domeny</li>
            <li>cool.mail@gmail.cz</li>
          </ul>
          <p> Ukázka nevalidního uživatelského jména: </p>
          <ul>
            <li>toto@neni@validni</li>
            <li>Nevalidnijmeno</li>
          </ul>
          <p>
          Pro odevzdání použijte GitHub/Bitbucket/Gitlab (poslat nám link na daný repozitář).
          </p>
        </div>
        <div className='solution'>
          Riesenie:
          <Login/>
        </div>
      </div>
    </>
  );
}

export default App;
