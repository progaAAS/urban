import React from "react";
import { Button, Colors } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/listReducer";

const AddButton = () => {

  const dispatch = useDispatch();
  
  const handleAddItem = () => {
    dispatch(addItem());
  };

    return (
      <div>
        <Button className="bt3-button" icon="plus" style={{background: Colors.COBALT4, marginLeft: "20px"}} onClick={handleAddItem} />
      </div>
    );
  }
  
  export default AddButton;
  