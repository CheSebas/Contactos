import { useState } from "react";
import "./index.css";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ronnnie Santoyo",
      email: "rn@example.com",
      phone: "882-231-3322",
    },
    {
      id: 2,
      name: "Bryan Gomez",
      email: "bg@example.com",
      phone: "882-231-4411",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Lista de Contactos</h1>
      <ContactList contacts={contacts} />
      <button className="add-btn" onClick={toggleModal}>
        +
      </button>
      {showModal && <Modal addContact={addContact} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
