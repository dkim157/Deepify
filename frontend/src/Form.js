import React, {useState, useEffect} from 'react';

function Form(props) {
  const [person, setPerson] = useState(
     {
        name: '',
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

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        document.getElementById("submit").click()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <form id="form">
      <input
        type="text"
        name="name"
        id="input"
        autoComplete="off"
        value={person.name}
        onChange={handleChange}
        placeholder="Enter Artist Name" />
      <input id="submit" type="button" value="Search" onClick={submitForm} />
    </form>
  );
}
export default Form;