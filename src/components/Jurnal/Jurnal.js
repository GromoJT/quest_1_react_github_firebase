import React,{useState,useEffect} from "react";
import {db} from '../../firebaseConfig';
import {collection, getDocs, deleteDoc,doc} from 'firebase/firestore'
import { Box, Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Jurnal = () =>{

  const [entries, setEntries] = useState([]);
  
  const entriesCollectionRef = collection(db,"journalEntries");


  const deleteEntry = async (id) =>{
    const entryDoc = doc(db,"journalEntries",id)
    await deleteDoc(entryDoc);

  }
 

  useEffect(()=>{
    const getEntries = async () =>{
      const data = await getDocs(entriesCollectionRef);
      console.log(data);
      setEntries(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };

    getEntries();
  },[])

  return(
   //HERE
   <Paper
      sx={{
        p:1,
        backgroundColor:'#333333'
      }}
    >
      {entries.map((entry)=>{
          return (
      <Grid key={entry.id}  container spacing={2} sx={{marginBottom:5,color:'white'}}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="picture" src="https://thispersondoesnotexist.com/image" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Entry
              </Typography>
              <Typography variant="h3" gutterBottom >
              "{entry.text}"
              </Typography>
              <Typography variant="body2" color="#999999">
              {entry.time.toDate().toString()} 
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button onClick={()=>{deleteEntry(entry.id)}}>Delete entry</Button>
              </Typography>
              <hr/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      )
    })}
    </Paper>
  );
}

export default Jurnal;

/*
 <div>
      
        {entries.map((entry)=>{
          return (
          
          <Box  key={entry.id} sx={{color:"white",bgcolor:'#333333',marginBottom:3,borderRadius:10,padding:1}}>

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <p>"{entry.text}"</p>
              </Grid>
              <Grid item xs={3}>
                <button onClick={()=>{deleteEntry(entry.id)}}>Delete entry</button>
              </Grid>
              <Grid item xs={9}>
              <span>
              {
                entry.time.toDate().toString()  
              }
              </span>
              </Grid>
            </Grid>
          </Box>
          )
      })}
    </div>

    */