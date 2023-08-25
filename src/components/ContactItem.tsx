// ContactItem.tsx

import React from 'react';
import { useAppDispatch } from './redux/hooks';
import { deleteContact } from './redux/actions'; // Import your Redux action

interface ContactItemProps {
  contact: { id: number; name: string; number: string };
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    // Dispatch the action to delete a contact from Redux store
    dispatch<any>(deleteContact(contact.id));
  };

  return (
    <div className=' p-2 bg-slate-600 rounded-lg w-[200px] h-[200px] m-3'>

    <div className=''>
      <h3 className='text-white font-bold pt-2'>{contact.name}</h3>
      <h4 className='text-white font-semibold mt-3 break-words p-2'>{contact.number}</h4>

      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded focus:outline-none focus:shadow-outline p-3 mt-3' onClick={handleDelete}>Delete</button>
    </div>
    </div>
  );
};

export default ContactItem;
