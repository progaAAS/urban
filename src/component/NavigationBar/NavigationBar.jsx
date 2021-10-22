import React from "react";
import AddButton from "../AddButton/AddButton";
import SearchInput from "../SearchInput/SearchInput";
import { Colors } from "@blueprintjs/core";

const NavigationBar = ({setSearchText}) => {
  
    return (
      <div className="bp3-navbar" style={{background: Colors.COBALT5}}>
        <div className="bp3-navbar-group bp3-align-left">
          <SearchInput setSearchText={setSearchText}/>
          <AddButton/>
        </div>      
      </div>
    );
  }
  
  export default NavigationBar;
  