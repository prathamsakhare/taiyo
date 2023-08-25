// contactsReducer.ts

import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./actions";

// Define the initial state for the contacts

export const initialState = [
  
];

export type contactState = typeof initialState;

// Reducer function
const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      // Add a new contact to the state
      return [...state, action.payload];

    case DELETE_CONTACT:
      // Delete a contact by ID from the state
      return state.filter((contact: any) => contact.id !== action.payload);

    case EDIT_CONTACT:
      // Handle EDIT_CONTACT action
      const editedContact = action.payload;
      const updatedContacts = state.map((contact: any) =>
        contact.id === editedContact.id ? editedContact : contact
      );
      return {
        ...state,
        contacts: updatedContacts,
      };

    default:
      return state;
  }
};
export const AllContacts = (state: any) => state.contacts;
export default contactsReducer;
