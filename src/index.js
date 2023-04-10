import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from 'react'

import "./styles/styles.scss";
import JournalApp from "./JournalApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <JournalApp />
  </StrictMode>,
  rootElement
);
