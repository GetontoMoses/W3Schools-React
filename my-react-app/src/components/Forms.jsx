import React from "react";

export default function Forms() {
  return (
    <>
      <div>
        <label>
          Name
          <input type="text" name="name" />
        </label>
      </div>
      <label>
        Password
        <input type="password" name="password" />
      </label>
    </>
  );
}
