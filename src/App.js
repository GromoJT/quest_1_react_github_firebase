import './App.css';
import React,{ useState, useEffect} from 'react';
import Jurnal from './components/Jurnal/Jurnal';
import InsertEntry from './components/InsertEntry/InsertEntry';

function App() {



  return (
    <div className="App">
      <InsertEntry/>
      <Jurnal/>
      
    </div>
  );
}


export default App;
