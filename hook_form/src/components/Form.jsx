import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setErrorFirstName("First Name must be at least 2 characters");
    } else {
      setErrorFirstName("");
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setErrorLastName("Last Name must be at least 2 characters");
    } else {
      setErrorLastName("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setErrorEmail("Email must be at least 5 characters");
    } else {
      setErrorEmail("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setErrorPassword("Password must be at least 8 characters");
    } else {
      setErrorPassword("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setErrorConfirmPassword("Passwords must match");
    } else {
      setErrorConfirmPassword("");
    }
  };

  return (
    <>
      <form>
        <div className='user_form'>
          <label>First Name: </label>
          <input type="text" className='input_box' onChange={handleFirstName} />
        </div>
        {errorFirstName ? <p>{errorFirstName}</p> : ""}
        <div className='user_form'>
          <label>Last Name: </label>
          <input type="text" className='input_box' onChange={handleLastName} />
        </div>
        {errorLastName ? <p>{errorLastName}</p> : ""}
        <div className='user_form'>
          <label>Email Address: </label>
          <input type="email" className='input_box' onChange={handleEmail} />
        </div>
        {errorEmail ? <p>{errorEmail}</p> : ""}
        <div className='user_form'>
          <label>Password: </label>
          <input type="password" className='input_box' onChange={handlePassword} />
        </div>
        {errorPassword ? <p>{errorPassword}</p> : ""}
        <div className='user_form'>
          <label>Confirm Password: </label>
          <input type="password" className='input_box'onChange={handleConfirmPassword} />
        </div>
        {errorConfirmPassword ? <p>{errorConfirmPassword}</p> : ""}
      </form>

      <h3>Your Form Data</h3>
<div className = 'form_data'>
      
      <h5>First Name: {firstName}</h5>
      <h5>Last Name: {lastName}</h5>
      <h5>Email: {email}</h5>
      <h5>Password: {password}</h5>
      <h5>Confirm Password: {confirmPassword}</h5>
        </div>
        <br/>
        <button onClick={createUser}>Create User</button>
    </>
  );
};

export default Form;
