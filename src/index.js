import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { DateTimePicker } from "./date-time-picker";

ReactDOM.render(
  <>
    <CssBaseline />
    <DateTimePicker />
  </>,
  document.querySelector("#root")
);
