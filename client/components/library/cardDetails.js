import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    styledDetails: {
      height: 400,
      width: 225,
      textAlign: (props) => (props.alignLeft ? "left" : "right"),
      padding: 10,
      boxSizing: "border-box",
      backgroundColor: "#292b2f",
      alignItems: "flex-end",
      display: "flex",
      position: "relative",
      flexDirection: "column",
      fontSize: 13,
      "& meter": {
        width: "100%",
      },
      "& b": {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
      },
    },
  })
);
const CardDetails = ({ alignLeft, children }) => {
  const classes = useStyles({ alignLeft });
  return <div className={classes.styledDetails}>{children}</div>;
};

export default CardDetails;
