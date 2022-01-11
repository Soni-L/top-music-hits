import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Content from "../components/Content";
import ReactGA from "react-ga";
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

export const SearchContext = React.createContext();

export default function TopHits() {
  const classes = useStyles();
  const [searchContext, setSearchContext] = useState("albums");
  const [searchText, setSearchText] = useState("");

  const [topSongs, setTopSongs] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);

  React.useEffect(() => {
    ReactGA.initialize("G-2Z38C3ZK22", {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: "42069",
        siteSpeedSampleRate: 100,
      },
    });

    ReactGA.pageview(
      'tophits'
    );
  }, []);

  useEffect(() => {
    if (searchContext === "songs") {
      async function fetchSongs() {
        const response = await axios.get(
          "https://itunes.apple.com/us/rss/topsongs/limit=100/json"
        );
        setTopSongs(response?.data?.feed?.entry);
      }
      fetchSongs();
    } else {
      async function fetchAlbums() {
        const response = await axios.get(
          "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
        );
        setTopAlbums(response?.data?.feed?.entry);
      }
      fetchAlbums();
    }
  }, [searchContext]);

  return (
    <div className={classes.root}>
      <Header
        className={classes.header}
        showAlbums={() => setSearchContext("albums")}
        showSongs={() => setSearchContext("songs")}
        searchContext={searchContext}
        handleSearch={(e) => setSearchText(e)}
      />
      <Content
        searchContext={searchContext}
        className={classes.content}
        topSongs={topSongs}
        topAlbums={topAlbums}
        searchText={searchText}
      />
    </div>
  );
}
