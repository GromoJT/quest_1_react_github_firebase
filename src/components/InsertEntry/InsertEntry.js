import {collection, addDoc} from 'firebase/firestore'
import React, { useState } from 'react';
import {db} from '../../firebaseConfig';




const InsertEntry = () =>{

    const entriesCollectionRef = collection(db,"journalEntries");

    const [newEntry,setNewEntry] = useState("");
    


    const createEntry = async() =>{
        await addDoc(entriesCollectionRef,{text:newEntry,time: new Date()});
    }

    return(
        <div>
            <input placeholder='entry...' onChange={(event)=>{setNewEntry(event.target.value);}}/>
            <button onClick={createEntry}>Save</button>
        </div>
    );
}
export default InsertEntry;
