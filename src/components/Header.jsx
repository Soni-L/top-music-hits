import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h2">
        Top Hits
      </Typography>
    </div>
  );
}
