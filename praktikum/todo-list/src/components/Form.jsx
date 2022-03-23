import React from "react";
import Button from "./Button";

const Form = ({ checkCompleted, title, classTitle, onClick }) => {
  return (
    <>
      <div className="row">
        <div style={{ display: "flex" }}>
          <input
            onChange={checkCompleted}
            type="checkbox"
            className="checkbox"
          />
          <div className={classTitle}>{title}</div>
        </div>
        <Button onClick={onClick} text={"Delete"} color={"red"} />
      </div>
    </>
  );
};

export default Form;
