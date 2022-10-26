import "./Modal.css";

function Modal(props) {
  function onClose() {
    props.validationChange(true);
  }

  /*  window.onclick = () => {
    if (props.isValid === false) {
      onClose();
    }
  }; */

  return (
    <div id="myModal" className={`modal ${!props.isValid ? "show" : "hide"}`}>
      <div className="modal-content">
        <div className="header">
          <h2>Invalid Input</h2>
        </div>
        <div className="modal-body">
          <h5>{props.validationMessage}</h5>
          <button onClick={onClose} className="close">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
