import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={createUser}>
      <div>
        <label>First Name </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Email Address </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <h3>Your Form Data</h3>
      <h5>
        <label>First Name: </label>
        {firstName}
      </h5>
      <h5>
        <label>Last Name: </label>
        {lastName}
      </h5>
      <h5>
        <label>Email Address: </label>
        {email}
      </h5>
      <h5>
        <label>Password: </label>
        {password}
      </h5>
      <h5>
        <label>Confirm Password: </label>
        {confirmPassword}
      </h5>
    </form>
  );
};

export default Form;
