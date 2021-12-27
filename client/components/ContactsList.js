import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../store/contacts";

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector((state) => state.contacts);

  console.log(contacts);

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <li>{contact.firstName}</li>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
