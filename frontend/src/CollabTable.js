import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

const size = {
  width: '100%',
  height: 80  ,
};
const view = 'coverart'; // 'list' or 'coverart'
const theme = 'black'; // 'black' or 'white'

function Table (props) {
  return (
    <table>
      <TableHeader characterData={props.characterData}/>
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
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
    return (
        <>
          <tr key={"A"}>
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
   return (
     <tbody>{rows}</tbody>
   )
}

export default Table;