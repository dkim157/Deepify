import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './Table';
import Form from './Form';


function MyApp() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAll().then( result => {
       if (result)
          setCharacters(result);
     });
  }, [] );

  function removeOneCharacter (index) {
    makeDel(characters[index]);

    const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }

  async function makeDel(userToDelete){
    try {      
      const response = await axios.delete('http://localhost:5000/users/'+ userToDelete['_id']);
      return response;
    }
    catch (error){
      //We're not handling errors. Just logging into the console.
      console.log(error); 
      return false;         
    }
  }
  

  async function fetchAll(){
    try {
       const response = await axios.get('http://localhost:5000/users');
       console.log(response)
       return response.data.users_list;
    }
    catch (error){
       //We're not handling errors. Just logging into the console.
       console.log(error); 
       return false;         
    }
 }

 function updateList(person) { 
  makePostCall(person).then( result => {
  if (result)
     setCharacters([...characters, result] );
  });
}

 async function makePostCall(person){
    try {
     const response = await axios.post('http://localhost:5000/users', person);
     return response.data; 
    }
    catch (error) {
     console.log(error);
     return false;
    }
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );  
}


export default MyApp;