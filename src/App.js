import './App.css';
import React from 'react';
import Jurnal from './components/Jurnal/Jurnal';
import InsertEntry from './components/InsertEntry/InsertEntry';
import { Box, Grid } from '@mui/material';

function App() {



  return (
    <div className="App">
      
      <Grid container spacing={2}>
        <Grid item xs={4} >
          <InsertEntry sx={{position: "sticky"}}/>
        </Grid>
        <Grid item xs={8}>
          <Jurnal/>
        </Grid>
      </Grid>
      
      
    </div>
  );
}


export default App;
