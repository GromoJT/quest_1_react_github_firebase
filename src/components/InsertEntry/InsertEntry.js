import { Box } from '@mui/material';
import {collection, addDoc} from 'firebase/firestore'
import React, { useState } from 'react';
import {db} from '../../firebaseConfig';


function refreshPage() {
    
}

const InsertEntry = () =>{

    const entriesCollectionRef = collection(db,"journalEntries");

    const [newEntry,setNewEntry] = useState("");
    
    

    const createEntry = async() =>{
        await addDoc(entriesCollectionRef,{text:newEntry,time: new Date()});
        window.location.reload(false);
    }

    return(
        <Box >
            <textarea style={{maxWidth:'95%',marginTop:5}} rows="4" color='50' placeholder='entry...' onChange={(event)=>{setNewEntry(event.target.value);}}/>
            <button onClick={createEntry}>Save</button>
        </Box>
    );
}
export default InsertEntry;
