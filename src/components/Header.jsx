import React from "react";
import { Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1em",
  },
  headerText: {
    marginBottom: "5px",
  },
  chipContainer: {
    marginBottom: "1em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  chip: {
    marginRight: "1em",
  },
  searchBar: {
    marginTop: "1em",
    marginBottom: "1em",
  },
});

export default function Header({
  showSongs,
  showAlbums,
  searchContext,
  handleSearch,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.headerText}>
        Top Hits
      </Typography>
      <div className={classes.chipContainer}>
        <Chip
          label="Top albums"
          color={searchContext === "albums" ? "primary" : "default"}
          onClick={showAlbums}
          className={classes.chip}
        />
        <Chip
          label="Top songs"
          color={searchContext === "songs" ? "primary" : "default"}
          onClick={showSongs}
          className={classes.chip}
        />
        <SearchBar className={classes.searchBar} onSearch={handleSearch} />
      </div>
    </div>
  );
}
