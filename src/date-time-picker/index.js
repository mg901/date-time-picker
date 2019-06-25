import React, { useState } from "react";
import { Russian } from "./locale";

import { DateTimePicker as Flatpickr } from "../react-flatpickr";
import { useStyles } from "./styles";

export const DateTimePicker = () => {
  const [date, setDate] = useState(new Date());
  useStyles();

  return (
    <Flatpickr
      data-enable-time
      value={date}
      options={{
        prevArrow: "*",
        nextArrow: "*",
        // mode: "range",
        time_24hr: true,
        dateFormat: "d.m.Y H:i",
        locale: Russian
      }}
      onChange={() => {
        setDate(date);
      }}
    />
  );
};
