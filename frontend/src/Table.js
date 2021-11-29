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
    <table class="table1">
      <TableHeader characterData={props.characterData} />
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
  );
}

function TableHeader(props){
  const n = props.characterData[0]
  if(n===undefined){
    return null
  }
  return (
    <thead>
      <tr>
        <th>{n.name}</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const rows = props.characterData.map((row, _id) => {
    return (
      <>
        <tr key={"A"}>
          <td><SpotifyPlayer
            uri={[row.top_tracks[0].uri]}
            size={size}
            view = {view}
            theme = {theme}
          /></td>
        </tr>
        <tr key={"B"}>
          <td><SpotifyPlayer
            uri={[row.top_tracks[1].uri]}
            size={size}
            view = {view}
            theme = {theme}
          /></td>
        </tr>
        <tr key={"C"}>
          <td><SpotifyPlayer
            uri={[row.top_tracks[2].uri]}
            size={size}
            view = {view}
            theme = {theme}
          /></td>
        </tr>
        <tr key={"D"}>
          <td><SpotifyPlayer
            uri={[row.top_tracks[3].uri]}
            size={size}
            view = {view}
            theme = {theme}
          /></td>
        </tr>
        <tr key={"E"}>
          <td><SpotifyPlayer
            uri={[row.top_tracks[4].uri]}
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