import React from "react";
import { Colors } from "@blueprintjs/core";

const Table = ({list}) => {

  return (
    <div style={{height: "calc(100vh - 50px)", background: Colors.INDIGO3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "24px"}}>
      {list && list.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </div>
  );
}

export default Table;
