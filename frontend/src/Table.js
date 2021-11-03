import React from 'react'

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
        <td>{row.top_tracks[0].title}</td>
        <td>{row.top_tracks[1].title}</td>
        <td>{row.top_tracks[2].title}</td>
        <td>{row.top_tracks[3].title}</td>
        <td>{row.top_tracks[4].title}</td>
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