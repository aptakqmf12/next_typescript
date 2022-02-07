import React from "react";

const login = () => {
  return (
    <>
      <form>
        <fieldset>
          <legend>login</legend>
          <input type="text" placeholder="id" />
        </fieldset>
        <fieldset>
          <legend>paaword</legend>
          <input type="text" placeholder="pw" />
        </fieldset>
      </form>
    </>
  );
};

export default login;
