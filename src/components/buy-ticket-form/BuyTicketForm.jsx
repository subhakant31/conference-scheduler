import { useState } from "react";
import "./BuyTicketForm.scss";

function BuyTicketFormModal(props) {
  const [isValid, setIsValid] = useState(false);

  function closeModal() {
    props.toggleFormModal();
  }

  function checkValidity(e) {
    if (e.target.validity.valid) {
      setTimeout(() => {
        setIsValid(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsValid(true);
      }, 1000);
    }
  }

  return (
    <>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <form action="submit" className="form">
        <h2 className="form__heading">event registration</h2>
        <button onClick={closeModal} className="form__close">
          <i className="icon-cross" onClick={closeModal}></i>
        </button>
        <div className="form__name-wrapper">
          <input
            type="text"
            placeholder="first name"
            className="input form__name-wrapper__first-name"
          />
          <input
            type="text"
            placeholder="last-name"
            className="input form__name-wrapper__last-name"
          />
        </div>
        <input
          type="email"
          onChange={checkValidity}
          placeholder="email address"
          className="input"
        />
        {isValid && (
          <span className="error-message">
            Please enter correct email address
          </span>
        )}
        <input type="text" placeholder="subject" className="input" />
        <textarea
          type="text"
          placeholder="your message"
          className="input form__message"
        />
        <button type="submit" className="form__submit">
          buy ticket
        </button>
      </form>
    </>
  );
}

export default BuyTicketFormModal;
