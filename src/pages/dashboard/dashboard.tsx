import { Box, Grid2, Paper } from "@mui/material";
import React from "react";
import scss from "./Dashboard.module.scss";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Box>
        <Grid2 container gap={2} className={scss.topCardsContainer}>
          <Grid2>
            <Paper className={scss.dataCard}>xs=4</Paper>
          </Grid2>
          <Grid2>
            <Paper className={scss.dataCard}>xs=4</Paper>
          </Grid2>
          <Grid2>
            <Paper className={scss.dataCard}>xs=4</Paper>
          </Grid2>
        </Grid2>
        <Grid2 marginY={2}>
          <Paper className={scss.dataCard}>xs=12</Paper>
        </Grid2>
      </Box>
    </div>
  );
}
