import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../store/companies';


const AddCompany = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addCompany(name, notes))
    setName("")
    setNotes("")
  }
  return (
    <div className="addCompany">
      <h1>Add New Company to Wishlist</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={(evt) => {
            setName(evt.target.value)
          }}
        >
        </input>
        <input
          name="notes"
          placeholder="Notes"
          value={notes}
          onChange={(evt) => {
            setNotes(evt.target.value)
          }}
        >
        </input>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddCompany;
