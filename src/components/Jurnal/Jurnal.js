import React,{useState,useEffect} from "react";
import {db} from '../../firebaseConfig';
import {collection, getDocs, deleteDoc,doc} from 'firebase/firestore'
import { Box, Grid } from "@mui/material";
import {styled} from "@mui/system"


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
  );
}

export default Jurnal;