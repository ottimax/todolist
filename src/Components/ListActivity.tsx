import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { IListActivityProps } from "../type/type";
import ItemActivity from "./ItemActivity";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#EDF2F4",
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  grid: {
    backgroundColor: "black"
  }
});

const ListActivity: React.FunctionComponent<IListActivityProps> = (props) => {
  const classes = useStyles();

  const listToRender = props.listActivity.activities?.map((activity) => {
    return (
      <ItemActivity
        key={activity.id}
        activity={activity}
        delActivity={props.delActivity}
        saveActivity={props.saveActivity}
      />
    );
  });

  return (
    <Box className={classes.root} boxShadow={2} borderRadius={3}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
        lg={12}
        className={classes.grid}
      >
        {listToRender}
      </Grid>
    </Box>
  );
};

export default ListActivity;
