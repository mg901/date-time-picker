import { makeStyles } from "@material-ui/core/styles";
import { grey, green } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => {
  return {
    "@global": {
      'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
        WebkitAppearance: "none",
        MozAppearance: "none",
        margin: 0
      },
      "input[type=number]": {
        MozAppearance: "textfield"
      },
      ".flatpickr-input": {
        padding: theme.spacing(1),
        ...theme.typography.body1,
        color: theme.palette.text.primary,
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        backgroundColor: "transparent",
        borderBottom: `1px solid ${grey[500]}`,
        transition: `${theme.transitions.duration.standard} ${
          theme.transitions.easing.easeInOut
        }`,
        "&:hover": {
          borderBottom: `2px solid ${grey[900]}`
        },
        "&:focus": {
          outline: "none",
          borderBottom: `2px solid ${green[600]}`
        }
      },

      ".flatpickr-calendar": {
        ...theme.typography.body2,
        position: "relative",
        display: "none",
        flexDirection: "column",
        width: theme.spacing(41.5),
        boxShadow: theme.shadows[5],
        borderRadius: theme.spacing(0.5),
        margin: "3rem"
      },
      ".flatpickr-calendar.open": {
        display: "flex"
      },
      ".flatpickr-months": {
        position: "relative",
        display: "flex",
        backgroundColor: green[600],
        padding: theme.spacing(3, 0.5, 1),
        marginBottom: theme.spacing(1),
        boxShadow: theme.shadows[1],
        borderRadius: theme.spacing(0.5, 0.5, 0, 0)
      },
      ".flatpickr-prev-month, .flatpickr-next-month": {
        padding: theme.spacing(0.5)
      },
      ".flatpickr-month": {
        justifyContent: "center",
        flex: 1
      },
      ".flatpickr-current-month": {
        display: "flex",
        justifyContent: "center",
        ...theme.typography.h4,
        color: theme.palette.common.white
      },
      ".flatpickr-current-month .numInputWrapper": {
        position: "relative"
      },
      ".cur-month": {
        display: "flex",
        alignItems: "center"
      },
      ".cur-year": {
        position: "relative",
        ...theme.typography.h4,
        color: theme.palette.common.white,
        backgroundColor: green[600],
        width: theme.spacing(14),
        padding: theme.spacing(0, 0.5),
        borderRadius: theme.spacing(0.5),
        "&:hover": {
          backgroundColor: green[700]
        },
        "&:focus": {
          outline: "none"
        }
      },
      ".flatpickr-weekdays": {
        padding: theme.spacing(1, 2)
      },
      ".flatpickr-days": {
        padding: theme.spacing(0, 2),
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start"
      },
      ".flatpickr-weekdaycontainer": {
        display: "flex",
        marginBottom: theme.spacing(1.5)
      },
      ".flatpickr-weekday": {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        color: grey[600],
        ...theme.typography.caption,
        "&:focus": {
          outline: "none"
        }
      },
      ".dayContainer": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
      },
      ".flatpickr-day": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "14.15%",
        height: theme.spacing(5.5),
        borderRadius: theme.spacing(5.5),
        "&:focus": {
          outline: "none"
        }
      },
      ".flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay": {
        color: grey[400],
        background: "transparent",
        borderColor: "transparent",
        cursor: "default"
      },
      ".flatpickr-day.inRange, .flatpickr-day.today.inRange, .flatpickr-day:hover, .flatpickr-day:focus": {
        cursor: "pointer",
        backgroundColor: grey[300],
        borderRadius: theme.spacing(5.5)
      },
      ".flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus": {
        color: "inherit"
      },
      ".flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay": {
        background: green[600],
        color: theme.palette.common.white
      },
      ".flatpickr-day.today": {
        backgroundColor: grey[400]
      },
      ".flatpickr-time": {
        display: "flex",
        padding: theme.spacing(0, 2, 1),
        "& .numInputWrapper": {
          position: "relative",
          flex: 1
        },
        "& .numInput": {
          width: "100%",
          textAlign: "center",
          fontSize: "inherit",
          padding: theme.spacing(1),
          backgroundColor: "transparent"
        },
        "& .numInput:focus": {
          outline: "none",
          fontWeight: "bold"
        }
        // display: "none"
      },
      ".flatpickr-time:focus": {
        outline: "none"
      },
      ".numInput": {
        border: "1px solid transparent"
      },
      ".flatpickr-time-separator": {
        padding: theme.spacing(1),
        fontWeight: "bold"
      }
    }
  };
});
