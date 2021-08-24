import React from "react";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export default function ContentSkeleton() {
  return (
    <>
      {[...new Array(100)].map((item, index) => (
        <Grid item xs={4} sm={3} lg={2} key={index}>
          <Skeleton variant="rect" animation={"pulse"} height={80} />
          <Skeleton variant="text" animation={"pulse"} height={20} />
        </Grid>
      ))}
    </>
  );
}
