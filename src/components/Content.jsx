import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "auto",
    height: "90vh",
    width: "100%",
    overflowX: "hidden",

    "&::-webkit-scrollbar": {
      width: "1em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      borderRadius: "1em",
      border: "3px solid transparent",
      backgroundClip: "content-box",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#a8bbbf",
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Content({ topSongs }) {
  const classes = useStyles();
  console.log(topSongs);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {topSongs.map((item) => (
          <Grid item sm={3} lg={3} key={item.id.label}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={item?.["im:image"]?.[2]?.label} alt="" width="100%" />
              <Typography variant="caption" display="block" gutterBottom>
                {item.title.label}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
