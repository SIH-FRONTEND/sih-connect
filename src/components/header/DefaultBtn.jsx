import React from "react";
import { Button } from "../UI/buttonStyled";

const DefaultBtn = ({ type, value, icon }) => {
  return (
    <div className="inline-flex">
      <Button type={type} className="flex justify-center">
        <p className="flex items-center justify-center">
          {value}
          <i>{icon}</i>
        </p>
      </Button>
    </div>
  );
};

export default DefaultBtn;
