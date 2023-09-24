import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const handleToast = () => {
    toast("successfully added!  ");
  };

  return (
    <div>
      <button onClick={handleToast}>add this</button>
      <ToastContainer />
    </div>
  );
}
