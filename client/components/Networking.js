import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contacts";
import ContactsList from "./ContactsList";

const Networking = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      addContact(firstName, lastName, company, title, linkedIn, email, phone)
    );
    setFirstName("");
    setLastName("");
    setCompany("");
    setTitle("");
    setLinkedIn("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h1>People I Have Connected With</h1>
      <ContactsList />
      <h3>Add New Connection</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(evt) => {
            setFirstName(evt.target.value);
          }}
        ></input>
        <input
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(evt) => {
            setLastName(evt.target.value);
          }}
        ></input>
        <input
          name="company"
          placeholder="Company"
          value={company}
          onChange={(evt) => {
            setCompany(evt.target.value);
          }}
        ></input>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(evt) => {
            setTitle(evt.target.value);
          }}
        ></input>
        <input
          name="linkedIn"
          placeholder="LinkedIn"
          value={linkedIn}
          onChange={(evt) => {
            setLinkedIn(evt.target.value);
          }}
        ></input>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        ></input>
        <input
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(evt) => {
            setPhone(evt.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Networking;
