import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: "500px",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar({ onSearch }) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSearch(searchText);
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search this list"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={keyPress}
      />
      <IconButton
        className={classes.iconButton}
        onClick={() => onSearch(searchText)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
