import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    }),
  };

  return qs.stringify(newQueryParams, {
    addQueryPrefix: true,
    encode: false,
  });
};


const SideBar = () => {
  const [searchText, setSearchText] = useState("");
  const { search } = useLocation();
  const history = useHistory();
  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: searchText },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <div className="search-input">
        <form onSubmit={handleSearch}>
          <input 
            placeholder="search"
            type="text"
            vaule={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      </div>
      <h3>Filter By City</h3>
      <Link
        className="Manchester"
        to={buildQueryString("query", {city: "Manchester" }, search)}
      >
        {" "}
        Manchester
      </Link>
      <Link
        className="Leeds"
        to={buildQueryString("query", {city: "Leeds" }, search)}
      >
        {" "}
        Leeds
      </Link>
      <Link
        className="Sheffield"
        to={buildQueryString("query", {city: "Sheffield" }, search)}
      >
        {" "}
        Sheffield
      </Link>
      <Link
        className="Liverpool"
        to={buildQueryString("query", {city: "Liverpool" }, search)}
      >
        {" "}
        Liverpool
      </Link>
    </div>
  )
}

export default SideBar;