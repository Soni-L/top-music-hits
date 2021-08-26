import { makeStyles } from "@material-ui/core/styles";
import { InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "35px",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "0.9em",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar({ onSearch, searchText, setSearchText }) {
  const classes = useStyles();

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSearch(searchText);
    }
  };

  return (
    <div className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="search this list"
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
    </div>
  );
}
