import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM, { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import store from "./components/redux/store/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="97842974136-6cqrepgh7paactchkcem9c3qbe4l3b7e.apps.googleusercontent.com">
    <BrowserRouter>
    <ToastContainer/>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
