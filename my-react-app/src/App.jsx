import React from "react";
import PropsLookup from "./PropsLookup";

export default function App() {
  return (
    <div>
       <PropsLookup comment="awesome" /> {/*I can pass a prop to the component in another component */}
      <h1>Hello, world! from the first component</h1>
    </div>
  );
}
