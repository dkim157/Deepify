import React from 'react'
import SpotifyPlayer from 'react-spotify-player'

const size = {
  width: '100%',
  height: 90,
};
const view = 'coverart'; // 'list' or 'coverart'
const theme = 'black'; // 'black' or 'white'

function Table (props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
  );
}

function TableHeader()  {
    return (
      <thead>
        <tr>
          <th>Artist Name</th>
        </tr>
      </thead>
    );
  }

function TableBody(props) {
  const rows = props.characterData.map((row, index, _id) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td><SpotifyPlayer
          uri={[row.top_tracks[0].uri]}
          size={size}
          view = {view}
          theme = {theme}
        /></td>
        <td><SpotifyPlayer
          uri={[row.top_tracks[1].uri]}
          size={size}
          view = {view}
          theme = {theme}
        /></td>
        <td><SpotifyPlayer
          uri={[row.top_tracks[2].uri]}
          size={size}
          view = {view}
          theme = {theme}
        /></td>
        <td><SpotifyPlayer
          uri={[row.top_tracks[3].uri]}
          size={size}
          view = {view}
          theme = {theme}
        /></td>
        <td><SpotifyPlayer
          uri={[row.top_tracks[4].uri]}
          size={size}
          view = {view}
          theme = {theme}
        /></td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
   });
   return (
     <tbody>{rows}</tbody>
   )
}

export default Table;