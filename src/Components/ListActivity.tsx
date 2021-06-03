import { Box, Container, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import * as React from "react";
import { IListActivityProps } from "../type/type";
import ItemActivity from "./ItemActivity";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#EDF2F4",
      padding: "2rem",
      minHeight: "100vh",
      '& h1': {
        color: "white"
      },
      [theme.breakpoints.down("sm")] : {
        padding: "1rem"
      }
      
    },
    containerTop: {
      width: "100%",
      backgroundColor: "#e63946",
      padding: "2rem 1rem",
      textAlign: "center"
    },
    containerTopBottom: {
      backgroundColor: "white",
      width: "100%",
      padding: "1rem 0",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"center",
      '& button': {
        padding: "0.5rem 1rem",
        backgroundColor: "#03071e",
        color: "white",
        borderRadius: "50px",
        border: "0px",
        width: "100%",
        fontSize: "14px",
        cursor: "pointer",
        '&:focus': {
          outline: "none"
        }
      }
    },
    input: {
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "50px",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#03071e",
      margin: "0.5rem 0",
      '&:focus': {
        outline: "none"
      },
    },
    delButton: {
      padding: "0.5rem 1rem",
      marginTop: "1rem",
      backgroundColor: "white",
      color: "#e63946",
      borderRadius: "50px",
      border: "0px",
      width: "221px",
      fontSize: "14px",
      fontWeight: "bolder",
      cursor: "pointer",
      '&:focus': {
        outline: "none"
      },
    }
  }),
);

const ListActivity: React.FunctionComponent<IListActivityProps> = (props) => {
  const classes = useStyles();

  const [nameState, setNameState] = React.useState<string>("");

  function handleName(e: any){
    setNameState(e.target.value)
  }

  function handleForm(e: any){
    e.preventDefault()
    props.addActivity(nameState)
  }

  function handleDelButton(e: any){
    e.preventDefault()
    props.delAllCompleted()
  }

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
    <Box className={classes.root}  >
      <Box className={classes.containerTop} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
        <h1>Aggiungi una nuova attività</h1>
        <form className={classes.form} onSubmit={handleForm} onChange={handleName}>
          <input className={classes.input} type="text" required  />
          <button>Aggiungi</button>
        </form>
        <button className={classes.delButton} onClick={handleDelButton}>Elimina completate</button>
      </Box>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        {listToRender}
      </Grid>
    </Box>
  );
};

export default ListActivity;
