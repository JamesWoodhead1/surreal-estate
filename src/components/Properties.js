import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";
import Alert from "./Alert";
import "../styles/Properties.css";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation;
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(err => console.error(err));
  }, [search]);

  if (alert.message) {
    return <Alert message={alert.message} success={alert.isSucces} />;
  }
  return (
    <div className="properties-page">
      Properties
      <SideBar />
      <div className="properties">
        {properties.map((property) => (
          <PropertyCard {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;