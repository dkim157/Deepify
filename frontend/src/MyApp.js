import React, {useState} from 'react';
import axios from 'axios';
import Table from './Table';
import CollabTable from './CollabTable';
import Form from './Form';
import backgroundVideo from './background.mp4'
import 'animate.css';
import SpotifyPlayer from 'react-spotify-player'


function MyApp() {
  const [characters, setCharacters] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible(wasVisible => false);
  }

 // this takes the artist data, console logs it, and then adds the artist to the list from prev assignment
 // use this data to create our starting page
 function updateList(person) {
  toggle()
  makeGetCall(person).then( result => {
  if (result)
     setCharacters([...characters, result]);
  });
}

const size = {
  width: '100%',
  height: 80,
};

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


  let choiceA = {name : "Bladee" };
  let choiceB = {name : "Bladee" };
  let choiceC = {name : "Bladee" };

  let choiceA_uri = null;
  let choiceB_uri = null;
  let choiceC_uri = null;

  if (characters.length > 1) {
    characters.splice(0, 1);
  }
  
  if (characters.length > 0) {
    let index =  characters.length - 1;
    
    choiceA = {name: characters[index].collabs[0].name};
    choiceB = {name: characters[index].collabs[1].name};
    choiceC = {name: characters[index].collabs[2].name};

    choiceA_uri = characters[index].collabs[0].track;
    choiceB_uri = characters[index].collabs[1].track;
    choiceC_uri = characters[index].collabs[2].track;
  }

  return (
    <div className="container">
      {/* <div class="video-wrap">
        <video autoPlay muted loop id="myVideo">
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
      </div> */}
      <div class="video-overlay"></div>
      <div id="content">
        {isVisible &&(
          <div class="title animate__animated animate__fadeInDown">Deepify</div>
        )}
        {isVisible &&(
          <div class="title2 animate__animated animate__fadeIn">search an artist. find collabs. go deeper.</div>
        )}
        {isVisible && (
          <div class="centerButton animate__animated animate__fadeInUp">
            <Form handleSubmit={updateList}/>
          </div>
        )}
      </div>

      <div class="row">
        <div class="one-third column">
          {!isVisible && (
            <Table characterData={characters} />
          )}
        </div>
        <div class="two-thirds column">
          {!isVisible && (
          <div class="table">
            <thead>
              <tr>
                <th>Song </th>
                <th>Artist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button onClick={()=>updateList(choiceA)}> {choiceA.name} </button>
                </td>
                <td>
                  <SpotifyPlayer
                    uri={choiceA_uri}
                    size={size}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={()=>updateList(choiceB)}> {choiceB.name} </button>
                </td>
                <td>
                    <SpotifyPlayer
                      uri={choiceB_uri}
                      size={size}
                    />
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={()=>updateList(choiceC)}> {choiceC.name} </button>
                </td>
                <td>
                    <SpotifyPlayer
                      uri={choiceC_uri}
                      size={size}
                    />
                </td>
              </tr>
            </tbody>
          </div>
          )}
        </div>
      </div>
    </div>
  );  
}

export default MyApp;