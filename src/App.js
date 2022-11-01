import InputForm from "./Components/InputForm/InputForm";
import { useState } from "react";
import DisplayUsers from "./Components/DisplayUser/DisplayUsers";
import Modal from "./Components/Modal/Modal";
import "./App.css";

function App() {
  const [storedUsers, setStoredUsers] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("true");

  function addNewUser(newUser) {
    setStoredUsers((prev) => [newUser, ...prev]);
  }

  function validation(validInput, message) {
    setIsValid(validInput);
    if (message !== "") {
      setValidationMessage(message);
    }
  }
  return (
    <div className="container">
      <InputForm validation={validation} addNewUser={addNewUser} />
      <DisplayUsers allUsers={storedUsers} />
      {!isValid ? (
        <Modal
          validationMessage={validationMessage}
          isValid={isValid}
          validationChange={validation}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
