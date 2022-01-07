import React, { useContext, useEffect } from "react";
import AlertContext from "../../Contexts/Alert/AlertContext";
import './style.css'

export default function Alert() {
  const context = useContext(AlertContext);
  if(context.alert.length > 0){
      setTimeout(()=>{
          context.clearAlert()
      },4000)
  }
  return (
    <>
      {context.alert.length > 0 && (
        <div
          className="alertMain"
          style={{
            backgroundColor:
              context.type === "danger"
                ? "#FF4F4B"
                : context.type === "warning"
                ? "#ff9b57"
                : "#95F985",
          }}
        >
          {context.alert}
        </div>
      )}
    </>
  );
}
