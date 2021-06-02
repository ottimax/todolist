import { Box, Button, createStyles, Grid, Input, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { IActivity, IItemActivityProps } from '../type/type';

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        backgroundColor: 'white',
        fontSize: "16px",
        color: "#2B2D42",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        margin: "0.5rem",
        padding: "1rem",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
      },
      button: {
          marginTop: "1rem",
          border: "1px solid gray",
          backgroundColor: "#D90429",
          color: "white"
      }
  }),
);



const ItemActivity: React.FunctionComponent<IItemActivityProps> = ({activity, delActivity, saveActivity}) => {

    const classes = useStyles()
  
    const [activityState, setActivityState] = useState<IActivity>(activity);

    function handleInput(e: any){

        setActivityState((prevState: IActivity) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        saveActivity(activityState)
    }, [activityState])  
    

    function handleButton(e: any){
        e.preventDefault()
        saveActivity(activityState)
    }
    
    return (
        <Grid container item justify="center" alignItems="center" >
            <Grid item xs={12} sm={6} className={classes.root}>
                <label >Titolo</label>
                <Input onChange={handleInput} name="name" defaultValue={activityState.name} />
                <Button className={classes.button} onClick={() => delActivity(activityState)}>Elimina</Button>
            </Grid>
        </Grid>
        // <Box width="xl" className={classes.root} boxShadow={2} borderRadius={3}>
        //     <label >{activityState.name}</label>
        //     <Input onChange={handleInput} name="name" defaultValue={activityState.name} />
        //     <Button className={classes.button} onClick={() => delActivity(activityState)}>Elimina</Button>
        // </Box>
    )
    
};

export default ItemActivity;
