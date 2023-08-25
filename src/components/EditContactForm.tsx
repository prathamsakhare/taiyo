// EditContactForm.tsx

import React, { useState } from 'react';

interface EditContactFormProps {
  contact: any;
  onSave: (editedContact: any) => void;
  onCancel: () => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({ contact, onSave, onCancel }) => {
  const [editedContact, setEditedContact] = useState<any>(contact);

  const handleSave = () => {
    onSave(editedContact);
  };

  return (
    <div>
      <h3>Edit Contact</h3>
      <label>Name:</label>
      <input
        type="text"
        value={editedContact.name}
        onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
      />
      <label>Email:</label>
      <input
        type="email"
        value={editedContact.email}
        onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditContactForm;
