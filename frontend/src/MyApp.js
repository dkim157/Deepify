import React, {useState} from 'react';
import axios from 'axios';
import Table from './Table';
import CollabTable from './CollabTable';
import Form from './Form';
import backgroundVideo from './background.mp4'
import 'animate.css';


function MyApp() {
  const [characters, setCharacters] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible(wasVisible => !wasVisible);
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

function buttonClick(){
  console.log("came here")
}

 async function makeGetCall(person){
    try {
     // this gets the artist data and returns it to updateList
     const response = await axios.get('http://localhost:5000/artist?name=' + person["name"]);

     console.log(CollabTable)
     return response.data; 
    }
    catch (error) {
     console.log(error);
     return false;
    }
  }
  return (
    <div className="container">
      <div class="video-wrap">
        <video autoPlay muted loop id="myVideo">
          <source src={backgroundVideo} type="video/mp4"></source>
        </video>
      </div>
      <div class="video-overlay"></div>
      <div id="content">
        {isVisible &&(
          <div class="title animate__animated animate__fadeInDown">deepify</div>
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
      <div class="parent-node">
        {!isVisible && (
          <Table characterData={characters} />
        )}
      </div>
    </div>
  );  
}

export default MyApp;