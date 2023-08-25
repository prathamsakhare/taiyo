// ContactForm.tsx

import React, { useState } from "react";
import { addContact } from "./redux/actions"; // Import your Redux action
import { useAppDispatch } from "./redux/hooks";
import { initialState } from "./redux/reducers";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const dispatch = useAppDispatch();
  console.log(initialState);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch the action to add a contact to Redux store
    dispatch<any>(addContact({ name, number }));
    console.log(initialState);
    // Clear the form fields
    setName("");
    setNumber("");
  };

  return (
    <div className="mt-[150px] sm:mt-[120px]">
      <form
        onSubmit={handleSubmit}
        className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[250px] w-[600px] sm:w-auto  ml-auto mr-auto"
      >
        <div className="flex-col items-center justify-center h-screen">
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2 mt-2">
              Number:
            </label>
            <input
              type="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            >
              Add Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
