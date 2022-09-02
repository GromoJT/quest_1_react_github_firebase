import './App.css';
import React from 'react';
import Counter from './features/counter/components/Counter/Counter';

function App() {



  return (
    <main className="App">
      
      <Counter />
      <div>
            <h2>Pracuje nad połaczeniem firestore wraz z Reduxem... ale jeszcze mam z tym problem...<br />
                Na razie mam zwykły licznik którey z niego korzysta...
            </h2>
        </div>
      
    </main>
  );
}


export default App;
