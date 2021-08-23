import React, { useState } from "react";
import { Typography, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "0.5em",
    backgroundColor: "lightGray",
  },
  headerText: {
    marginTop: "0.5em",
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

  const [searchText, setSearchText] = useState("");

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.headerText}>
        iTunes Top 100
      </Typography>
      <div className={classes.chipContainer}>
        <Chip
          label="Top albums"
          color={searchContext === "albums" ? "primary" : "default"}
          variant={searchContext === "albums" ? "default" : "outlined"}
          onClick={() => {
            showAlbums();
            setSearchText("");
            handleSearch();
          }}
          className={classes.chip}
        />
        <Chip
          label="Top songs"
          color={searchContext === "songs" ? "primary" : "default"}
          variant={searchContext === "songs" ? "default" : "outlined"}
          onClick={() => {
            showSongs();
            setSearchText("");
            handleSearch();
          }}
          className={classes.chip}
        />
        <SearchBar
          className={classes.searchBar}
          onSearch={handleSearch}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
    </div>
  );
}
