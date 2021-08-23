import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Content from "../components/Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  header: {
    height: "20vh",
    width: "100%",
    flexShrink: 0,
  },
  content: {
    height: "80vh",
  },
});

export default function TopHits() {
  const classes = useStyles();
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      const response = await axios.get(
        "https://itunes.apple.com/us/rss/topsongs/limit=100/json"
      );
      setTopSongs(response?.data?.feed?.entry);
    }
    fetchSongs();
  }, []);

  return (
    <div className={classes.root}>
      <Header className={classes.header} />
      <Content className={classes.content} topSongs={topSongs} />
    </div>
  );
}
