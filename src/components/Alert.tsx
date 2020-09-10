import React from "react";

const Alert = ({alert}: {alert:string}) => {
  return (
    <>
      {alert === "" ? "" : <div className="input-alert">{alert}</div>}
    </>
  );
};

export default Alert;
