import { useState } from "react";

export default function Login () {
  const [value, setValue] = useState({});

  const handleChange = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return alert( `Hey ${value.firstName}`);
  };

  return <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" />
      <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" />
      <input type="text" name="email" onChange={handleChange}  placeholder="email address"/>
      <input type="submit" />
    </form>
  </>;
}
