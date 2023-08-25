import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import EditContactForm from "./EditContactForm";

const ContactPage = () => {
  const [isForm, setIsForm] = useState(false);
  const handleIsForm = () => {
    setIsForm(true);
  };
  const toContactList = () => {
    setIsForm(false);
  };
  return (
    <div>
      {isForm ? (
        <div>
          <ContactForm />{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            onClick={toContactList}
          >
            Go To Contact List
          </button>
        </div>
      ) : (
        <div>
          <ContactList />{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            onClick={handleIsForm}
          >
            Add Contact
          </button>
          
        </div>
      )}
    </div>
  );
};

export default ContactPage;
