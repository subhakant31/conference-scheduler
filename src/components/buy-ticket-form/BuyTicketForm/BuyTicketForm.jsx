import './BuyTicketForm.scss';
import { useState } from 'react';
function BuyTicketForm(props) {
  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
      <h2 className="form__heading">event registration</h2>
      <button onClick={props.closeModal} className="form__close">
        
      </button>
      <div className="form__name-wrapper">
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          className="input form__name-wrapper__first-name"
        />
        <input
          type="text"
          placeholder="last-name"
          value={lastName}
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
    </>
  );
}

export default BuyTicketForm;
