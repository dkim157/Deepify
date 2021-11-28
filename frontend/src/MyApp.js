import React, {useState} from 'react';
import axios from 'axios';
import Table from './Table';
import CollabTable from './CollabTable';
import Form from './Form';



// import React from 'react';
import Tree from 'react-tree-graph';
import data from './data.ts';
import 'react-tree-graph/dist/style.css'
import './App.css';
import SpotifyPlayer from 'react-spotify-player'

// const App: React.FC = (props: any) => {
//   return (
//     <Tree
// 	data={data}
// 	height={700}
// 	width={1000}/>
//   );
// }

const App: React.FC = () => {
  let data = {
	name: 'Parent Artist',
	children: [{
		name: '[hello,hello]',
    children: 'other artist'
	}, {
		name: 'Child Artist Two',
    children: 'other artist'
	}]
};

  return (
    <Tree
	data={data}
	height={700}
	width={700}/>
  );
}

export default App;



function MyApp() {
  const [characters, setCharacters] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible(wasVisible => !wasVisible);
  }

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
      console.log(error); 
      return false;         
    }
  }

 // this takes the artist data, console logs it, and then adds the artist to the list from prev assignment
 // use this data to create our starting page
 function updateList(person) { 
  toggle()
  makeGetCall(person).then( result => {
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
      <div class="row">
        <br></br>
        <div class="title">deepify</div>
        <br></br>
      </div>
        {isVisible && (
          <div class="centerButton">
            <Form handleSubmit={updateList} />
          </div>
        )}
        <table>
          {!isVisible && (
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
          )}
          {!isVisible && (
            <CollabTable characterData={characters} removeCharacter={removeOneCharacter} />
          )}
        </table>
    </div>
  );  
}

export default MyApp;
