import { useState } from "react";
import "./AuthModal.scss";
import BuyTicketForm from "./BuyTicketForm/BuyTicketForm";
import LoginLogout from './login-logout/LoginLogout'

function BuyTicketFormModal(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function closeModal() {
    props.toggleFormModal();
  }

  

  return (
    <>
      <div className="modal-backdrop" onClick={closeModal}></div>
      <form action="submit" className="form">
      <i className="icon-cross" onClick={closeModal}></i>
        {isSignedIn && <BuyTicketForm closeModal={closeModal} />}
        {!isSignedIn && <LoginLogout closeModal={closeModal}/>}
      </form>
    </>
  );
}

export default BuyTicketFormModal;
