import { Box, Container } from "@material-ui/core";
import * as React from "react";
import { IListActivityProps } from "../type/type";
import ItemActivity from "./ItemActivity";

const ListActivity: React.FunctionComponent<IListActivityProps> = (props) => {
  const listToRender = props.listActivity.activities?.map((activity) => {
    return (
      <ItemActivity
        key={activity.id}
        activity={activity}
        delActivity={props.delActivity}
        saveActivity={props.saveActiviity}
      />
    );
  });

  return (
    <Box display="flex" flexDirection="row">
      {listToRender}
    </Box>
  );
};

export default ListActivity;
