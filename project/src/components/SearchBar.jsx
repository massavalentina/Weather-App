import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        onChange = { e => setCity(e.target.value)}
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
