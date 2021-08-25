import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, IconButton } from "@material-ui/core";
import searchYoutube from "youtube-api-v3-search";
import YoutubePlayerModal from "./YoutubePlayerModal";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ContentSkeleton from "./ContentSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "auto",
    height: "75vh",
    width: "100%",
    boxSizing: "border-box",
    margin: 0,

    "&::-webkit-scrollbar": {
      width: "1em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "darkgray",
      borderRadius: "1em",
      border: "3px solid transparent",
      backgroundClip: "content-box",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#D3D3D3",
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  priceTag: {
    position: "absolute",
    right: "0",
    color: "black",
    backgroundColor: "#cfb53b",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black",
    boxShadow: "-1px 1px #F5F5F5",
    borderBottomLeftRadius: "5px",
    padding: "0.2em 0.3em 0 0.3em",
    fontWeight: "bold",
  },
}));

export default function Content({
  searchContext,
  searchText = "",
  topSongs,
  topAlbums,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [videoId, setVideoId] = React.useState("");

  const videoSearch = async (term) => {
    // PRETTY PLEASE (WITH SUGAR ON TOP) - DO NOT ABUSE THIS API KEY!!!!!
    // this is on a free plan, so it has limitations on calls
    let result = await searchYoutube(
      "AIzaSyCMNWX9k8nPOn_6DwnKvjHkOnuv78kmv-k",
      { q: term }
    );
    setVideoId(result?.items[0]?.id?.videoId);
    setTimeout(() => {
      setOpen(true);
    }, 0);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        style={{ paddingLeft: "0.3em", margin: 0, width: "100%" }}
      >
        {searchContext === "songs" ? (
          topSongs.length > 0 ? (
            topSongs
              .filter((item) =>
                item?.title?.label
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              )
              .map((item) => (
                <Grid item xs={4} sm={3} lg={2} key={item.id.label}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{ backgroundColor: "lightgray", width: "100%" }}
                    >
                      <IconButton
                        onClick={() => videoSearch(item.title.label)}
                        variant="sm"
                      >
                        <YouTubeIcon color="secondary" />
                      </IconButton>
                    </div>

                    <img
                      className={classes.img}
                      src={item?.["im:image"]?.[2]?.label}
                      alt=""
                      width="100%"
                    />

                    <Typography variant="caption" display="block" gutterBottom>
                      {item.title.label}
                    </Typography>
                  </div>
                </Grid>
              ))
          ) : (
            <ContentSkeleton />
          )
        ) : topAlbums.length > 0 ? (
          topAlbums
            .filter((item) =>
              item?.title?.label
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            )
            .map((item) => (
              <Grid item xs={4} sm={3} lg={2} key={item.id.label}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    className={classes.priceTag}
                  >
                    {item?.["im:price"]?.label}
                  </Typography>
                  <img
                    src={item?.["im:image"]?.[2]?.label}
                    alt=""
                    width="100%"
                  />
                  <div>
                    <Typography variant="caption" display="block" gutterBottom>
                      {item.title.label}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))
        ) : (
          <ContentSkeleton />
        )}
      </Grid>
      <YoutubePlayerModal
        open={open}
        onClose={() => setOpen(false)}
        videoId={videoId}
      />
    </div>
  );
}
