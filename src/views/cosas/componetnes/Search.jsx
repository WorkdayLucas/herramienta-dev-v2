import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { sonTextosSimilares } from "../../../global/functions/comparadorDeTextos";



const Search = ({datos ,search, setSearch, setResult, critero}) => {


  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        style={{
          position: "absolute",
          width: "1.7rem",
          height: "1.7rem",
          display: "inline-flex",
          justifyContent: "center",
          margin: "0 0 0 1rem",
          cursor: "pointer",
        }}

        onClick={()=>{
            setResult(datos.filter((dato)=>dato[critero].toLowerCase().includes(search.toLowerCase()) || sonTextosSimilares(dato[critero],search, 3 )))
        }}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
