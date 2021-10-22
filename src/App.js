import React, { useState, useEffect } from "react";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import Table from "./component/Table/Table";
import { useSelector } from "react-redux";
import "@blueprintjs/core/lib/css/blueprint.css";

function App() {

  const listString = useSelector(state => state.list);
  const [searchText, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState('')

  useEffect(() => {
    setFilteredList(listString.filter(list => { return list.toLowerCase().includes(searchText.toLowerCase())})) 
  }, [searchText])

  return (
    <div className="аpp">
      <NavigationBar setSearchText={setSearchText}/>
      <Table list={searchText ? filteredList : listString}/>
    </div>
  );
}

export default App;
