// contactsActions.ts

import { Dispatch } from 'redux';

// Define action types
export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';


// Action creators
export const addContact = (contact: { name: string; number: string }) => (
  dispatch: Dispatch
) => {
  // Generate a unique ID for the contact (you can use a library like uuid)
  const id = Date.now();
  const newContact = { id, ...contact };

  // Dispatch the action to add a contact
  dispatch({
    type: ADD_CONTACT,
    payload: newContact,
  });
};

export const deleteContact = (contactId: number) => (dispatch : Dispatch) => {
  // Dispatch the action to delete a contact
  dispatch({
    type: DELETE_CONTACT,
    payload: contactId,
  });
};

export const editContact = (contact: any) => ({
  type: EDIT_CONTACT,
  payload: contact,
});
