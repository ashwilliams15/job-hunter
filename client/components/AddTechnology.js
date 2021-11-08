import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTechnology } from '../store/technologies';

const AddTechnology = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addTechnology(name))
    setName("")
  }

  return (
    <div className="addTechnology">
      <h1>Add New Technology</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Technology"
          value={name}
          onChange={(evt) => {
            setName(evt.target.value)
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

export default AddTechnology;
