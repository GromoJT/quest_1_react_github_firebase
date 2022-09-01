import React,{useState,useEffect} from "react";
import {db} from '../../firebaseConfig';
import {collection, getDocs, deleteDoc,doc} from 'firebase/firestore'



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
          <div key={entry.id}>
            <h1>{entry.text}</h1>
            <button onClick={()=>{deleteEntry(entry.id)}}>Delete entry</button>
            <span>
              {
                entry.time.toDate().toString()  
              }
              </span>

          </div>
          )
      })}
    </div>
  );
}

export default Jurnal;