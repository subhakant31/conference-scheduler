import styles from "./Header.module.scss";

import reactLogo from "../../assets/images/React-icon.svg";
import { useState, useEffect } from "react";
import BuyTicketFormModal from "../buy-ticket-form/BuyTicketForm";
import { Link, NavLink } from "react-router-dom";
import fetchData from "../../utilityFunction";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [headerData, setHeaderData] = useState({});
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let fetchedData = await fetchData(`{
        headermodel {
          buyticketbutton 
          logotext
        }
      }`);
      setIsContentLoaded(true);
      setHeaderData(fetchedData);
    })();
  }, []);

  function openSidePanel() {
    setIsOpen((prev) => {
      return !prev;
    });
  }
  // "{ header { buyticketbtn logotext logoimage {  url } } }"

  function toggleFormModal() {
    setModalIsOpen((prev) => {
      return !modalIsOpen;
    });
  }

  return (
    <>
      {isContentLoaded ? (
        <header className={styles.header}>
          <div className={styles["header__container"]}>
            <Link to="/" className={styles["logo"]}>
              <div className={styles["logo__wrapper"]}>
                <img src={reactLogo} alt="logo of react" />
                <h2 className={styles["logo__text"]}>
                  {headerData.headermodel.logotext}
                </h2>
              </div>
            </Link>
            <nav className={styles["header__container__nav-list"]}>
              <ul className={isOpen ? styles["panel-visible"] : null}>
                <li>
                  <NavLink
                    to="/#speakers"
                    className={({ isActive }) =>
                      isActive ? styles["active-page"] : undefined
                    }
                  >
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/code-of-conduct"
                    className={({ isActive }) =>
                      isActive ? styles["active-page"] : undefined
                    }
                  >
                    code of conduct
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/location-info"
                    className={({ isActive }) =>
                      isActive ? styles["active-page"] : undefined
                    }
                  >
                    location
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/event-schedule"
                    className={({ isActive }) =>
                      isActive ? styles["active-page"] : undefined
                    }
                  >
                    program
                  </NavLink>
                </li>
              </ul>
            </nav>
            <button
              className={styles["header__container__get-ticket-btn"]}
              onClick={toggleFormModal}
            >
              {headerData.headermodel.buyticketbutton}
            </button>
            {modalIsOpen && (
              <BuyTicketFormModal
                toggleFormModal={toggleFormModal}
              ></BuyTicketFormModal>
            )}
            <i
              className={!isOpen ? "icon-menu" : "icon-cross"}
              onClick={openSidePanel}
            ></i>
          </div>
        </header>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
