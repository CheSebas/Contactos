import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact">
          <span className="name">{contact.name}</span>
          <span className="details">
            {contact.email} - {contact.phone}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
