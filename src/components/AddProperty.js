import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      property: "Detached",
      bathrooms: "",
      bedrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      Add a Property
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input 
            id="title" 
            name="title" 
            placeholder="3 bedroom Flat"
            value={fields.title} 
            onChange={handleFieldChange} 
          />
        </label>
        <label htmlFor="city">
          <select id="city" name="city" value={fields.city} onChange={handleFieldChange} >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="property">
          <select id="property" name="property" value={fields.property} onChange={handleFieldChange} >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End Terrace">End Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          <input id="bathrooms" name="bathrooms" placeholder="2" value={fields.bathrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="bedrooms">
          <input id="bedrooms" name="bedrooms" placeholder="3" value={fields.bedrooms} onChange={handleFieldChange} />
        </label>
        <label htmlFor="price">
          <input id="price" name="price" placeholder="200000" value={fields.price} onChange={handleFieldChange} />
        </label>
        <label htmlFor="email">
          <input id="email" name="email" placeholder="joeblogs@example.com" value={fields.email} onChange={handleFieldChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddProperty;