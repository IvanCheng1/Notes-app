import React from "react";



const Alert = ({alert}: {alert:string}) => {
  return (
    <>
      {alert === "" ? "" : <div>{alert}</div>}
    </>
  );
};

export default Alert;
