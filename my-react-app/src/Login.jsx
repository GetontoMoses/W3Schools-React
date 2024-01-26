import React, { useState } from "react";

export default function Login() {
  const [input, setInputs] = useState({});

  const handleNameChange = (event) => {
    const name = event.target.name; //what is the event? the event is onChange .
    // and where is the target? the target is the input element in our html code in return.
    // and what is the name? the name is the name attribute of the input element in our html code
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${input.username}`); //input.username refers to the name attribute
    //of the input element in our html code
  };
  return (
    <>
      <div>
        <label>
          Name
          <input type="text" name="username" onChange={handleNameChange} />
        </label>
      </div>
      <label>
        Password
        <input type="password" name="password" onChange={handleNameChange} />
      </label>
      <div>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </div>
    </>
  );
}
