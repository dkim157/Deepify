import React, {useState} from 'react';

function Form(props) {
  const [person, setPerson] = useState(
     {
        name: '',
        // job: '',
     }
  );
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "job")
      setPerson(
         {name: person['name']}
      );
    else     
       setPerson(
         {name: value}   
       );
  }
  function submitForm() {
    props.handleSubmit(person);
    setPerson({name: ''});
  }
  return (
    <form>
      <label htmlFor="name">Enter Artist's Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}
export default Form;