import React, { useState } from "react";

export default function Login() {
  const [input, setInputs] = useState({});

  const handleNameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${input.username}`);
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
