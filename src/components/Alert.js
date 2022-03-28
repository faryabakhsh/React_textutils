import React from "react";

export default function Alert(props) {
    const capitalize =(word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
  return (
    <div style ={{height:'50px'}}>
    {props.alert && 
      <div className={`alert alert-${capitalize(props.alert.type)} alert alert-success`}
        role="alert " >
        <strong>{props.alert.type}: {props.alert.msg}</strong>
        
      </div>}
      </div>
  );
}
