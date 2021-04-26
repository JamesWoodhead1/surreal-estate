import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

const PropertyCard = (props) => {
  const { _id, title, type, bedrooms, bathrooms, price, city, email, onSaveProperty, userID } = props;
  return (
    <div className="property-card">
      <div className="property-card-title">{title}</div>
      <div className="property-card-type">{type}</div>
      <div
        className="property-card-bedrooms"
        data-testid="property-card-bedrooms"
      >
        {bedrooms} bedrooms
      </div>
      <div
        className="property-card-bathrooms"
        data-testid="property-card-bathrooms"
      >
        {bathrooms} bathrooms
      </div>
      <div
        className="property-card-price"
        data-testid="property-card-price"
      >
        {price}
      </div>
      <div className="property-card-city">{city}</div>
      <div className="property-card-email">
        <a href={`contact: ${email}`}>{email}</a>
      </div>
      {userID && (
        <a
          href="#"
          onClick={() => onSaveProperty(_id)}
          className="save"
        >
            <i className="fas fa-star" />Save
          </a>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};

export default PropertyCard;