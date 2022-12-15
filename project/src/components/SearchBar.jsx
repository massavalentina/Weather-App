import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className ="inputS" type="text" onChange = { e => setCity(e.target.value)} placeholder="add your city"/>
      <input className="btn" type="submit" value="Add" />
    </form>
  );
}
