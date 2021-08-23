import React from "react";
import { Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  chip: {
    marginRight: "5px",
  },
  headerText: {
    marginBottom: "5px",
  },
});

export default function Header({ showSongs, showAlbums, searchContext }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.headerText}>
        Top Hits
      </Typography>
      <div>
        <Chip
          label="Top albums"
          color={searchContext === "albums" ? "primary" : ""}
          onClick={showAlbums}
          className={classes.chip}
        />
        <Chip
          label="Top songs"
          color={searchContext === "songs" ? "primary" : ""}
          onClick={showSongs}
        />
      </div>
    </div>
  );
}
