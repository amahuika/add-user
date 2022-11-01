import React, { useState } from "react";
import Card from "../UI/Card";

import "./InputForm.css";

function InputForm(props) {
  const [userInputName, setUserInputName] = useState("");
  const [userInputAge, setUserInputAge] = useState("");

  function nameChangeHandler(event) {
    setUserInputName(event.target.value);
  }
  function ageChangeHandler(event) {
    setUserInputAge(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(userInputAge);
    if (parseInt(userInputAge) < 0) {
      props.validation(false, "Please enter an Age greater than 0");
      return;
    }
    if (userInputName.trim() === "" || userInputAge.trim() === "") {
      props.validation(false, "Please enter a Username and Age");
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      name: userInputName,
      age: userInputAge,
    };
    props.addNewUser(newUser);
    setUserInputAge("");
    setUserInputName("");
  }

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-sm-8 col-md-6">
        <Card>
          <form onSubmit={onSubmitHandler}>
            <div className="form-wrapper">
              <div className={`mb-2 `}>
                <label className={`form-label`}>Username</label>
                <input
                  type="text"
                  value={userInputName}
                  onChange={nameChangeHandler}
                  className={`form-control`}
                />
              </div>
              <div className={`mb-2 name-wrapper`}>
                <label className="form-label">Age (years)</label>
                <input
                  type="number"
                  value={userInputAge}
                  onChange={ageChangeHandler}
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">
              Add User
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default InputForm;
