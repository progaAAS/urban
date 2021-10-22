import React from "react";
import { Colors } from "@blueprintjs/core";

const SearchInput = ({setSearchText}) => {

    return (
      <div>
        <input className="bp3-input" type="text" placeholder="Search Input" style={{background: Colors.INDIGO4}} onChange={(e) => setSearchText(e.target.value)} />     
      </div>
    );
  }
  
  export default SearchInput;
  