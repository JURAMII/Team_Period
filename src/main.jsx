import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

import "./reset.css";
import "./common.css";

// const CLIENT_ID = "300552730883-jiclu9ee2p9f2quvk6rqn1vq1u4gqkca.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <>
  //   <App />
  // </>
  <BrowserRouter>
    {/* <GoogleOAuthProvider clientId={CLIENT_ID}>
    </GoogleOAuthProvider> */}
    <App />
  </BrowserRouter>
);
