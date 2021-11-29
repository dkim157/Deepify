import React from 'react'
import SpotifyPlayer from 'react-spotify-player'
import Form from './Form'
import updateList from './MyApp'
import setPerson from './MyApp'

const size = {
  width: '100%',
  height: 80  ,
};
const view = 'coverart'; // 'list' or 'coverart'
const theme = 'black'; // 'black' or 'white'

function Table (props) {
  return (
    <table align="center" class="table2">
      <TableHeader characterData={props.characterData} align="center"/>
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter}align="center"/>
    </table>
  );
}

function TableHeader(){
  return (
    <thead>
      <tr>
        <th>collabs</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const n = props.characterData[0]
  if(n===undefined){
    return null
  }

  const rows = props.characterData.map((row, index, _id) => {
    const keys = Object.keys(row.collabs)
    console.log(keys)
    const p1 = setPerson(keys[0])

    return (
        <>
          <tr key={"A"}>
            {/* <td><button onClick={()=>updateList(p1)} >{keys[0]}</button></td> */}
            <td>{keys[0]}</td>
            <td><SpotifyPlayer
              uri={row.collabs[keys[0]]}
              size={size}
              view = {view}
              theme = {theme}
            /></td>
          </tr>
          <tr key={"B"}>
            <td>{keys[1]}</td>
            <td><SpotifyPlayer
              uri={row.collabs[keys[1]]}
              size={size}
              view = {view}
              theme = {theme}
            /></td>
          </tr>
          <tr key={"C"}>
            <td>{keys[2]}</td>
            <td><SpotifyPlayer
              uri={row.collabs[keys[2]]}
              size={size}
              view = {view}
              theme = {theme}
            /></td>
          </tr>
        </>
    );
  });
  //  console.log(rows[0].props.children[0].props.children[0].props)
   return (
    <tbody>{rows}</tbody>
   )
}

export default Table;