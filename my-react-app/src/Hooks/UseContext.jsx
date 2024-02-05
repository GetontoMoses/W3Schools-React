import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function UserC() {
  const [user, setUser] = useState("John Doe");

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    </>
  );
}
function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}
function Component3() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 3</h1>
    </>
  );
}
