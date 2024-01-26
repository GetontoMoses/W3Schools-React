import React from "react";
import PropsLookup from "./PropsLookup";

import Login from "./Login";

export default function App() {
  return (
    <>
      <Login />
      <div>
        <PropsLookup comment="awesome" />{" "}
        {/*I can pass a prop to the component in another component */}
        <h1>Hello, world! from the first component</h1>
      </div>
    </>
  );
}
