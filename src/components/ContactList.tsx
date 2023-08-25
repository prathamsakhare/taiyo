// ContactList.tsx

import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem"; // Create a ContactItem component
import { AllContacts } from "./redux/reducers";
const ContactList: React.FC = () => {
  const contacts = useSelector(AllContacts);
  console.log(contacts);

  return (
    <div className="w-full">
      <h2 className="font-bold text-3xl mt-4" >Contact List</h2>
      <div className="bg-black h-full p-3 mt-5 w-[95%] ml-auto mr-auto rounded-lg flex flex-wrap  sm:justify-center">
        {contacts.map((contact: any) => (
          <ContactItem key={contact.id} contact={contact} /> 
        ))}

      </div>
    </div>
  );
};

export default ContactList;
