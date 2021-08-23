import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "auto",
    height: "75vh",
    width: "100%",
    overflowX: "hidden",

    "&::-webkit-scrollbar": {
      width: "1em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#D3D3D3",
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
}));

export default function Content({
  searchContext,
  searchText = "",
  topSongs,
  topAlbums,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{ marginLeft: "0.5em" }}>
        {searchContext === "songs"
          ? topSongs
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
                      alignItems: "center",
                    }}
                  >
                    <img
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
          : topAlbums
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
                    <img
                      src={item?.["im:image"]?.[2]?.label}
                      alt=""
                      width="100%"
                    />
                    <div>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {`Title: ${item.title.label}`}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {`Price: ${item?.["im:price"]?.label}`}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
      </Grid>
    </div>
  );
}
