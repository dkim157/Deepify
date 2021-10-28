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

 // this takes the artist data, console logs it, and then adds the artist to the list from prev assignment
 // use this data to create our starting page
 function updateList(person) { 
  makeGetCall(person).then( result => {
  console.log(result)
  if (result)
     setCharacters([...characters, result] );
  });
}

 async function makeGetCall(person){
    try {
     // this gets the artist data and returns it to updateList
     const response = await axios.get('http://localhost:5000/artist?name=' + person["name"]);
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