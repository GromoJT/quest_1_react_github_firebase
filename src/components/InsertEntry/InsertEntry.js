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
        if(newEntry.length>0){
            await addDoc(entriesCollectionRef,{text:newEntry,time: new Date()});
            window.location.reload(false);
        }
        
    }
    const createEntryCat = async() =>{
        await addDoc(entriesCollectionRef,{text:"Kitten!",time: new Date()});
        window.location.reload(false);
    }

    return(
        <Box >
            <textarea  style={{minWidth:'75%',maxWidth:'95%',marginTop:5}} rows="4" color='150' placeholder='entry...' onChange={(event)=>{setNewEntry(event.target.value);}}/>
            <button onClick={createEntry}>Save</button>
            <button onClick={createEntryCat}>Add cat</button>
        </Box>
    );
}
export default InsertEntry;
