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
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        borderRadius: "10px"
      },
      button: {
          backgroundColor: "#2B2D42",
          border: "1px solid white",
          color: "white",
          padding: "0.5rem 0.7rem 0.5rem 0.7rem",
          borderRadius: "50px",
          fontWeight: "bold",
          fontFamily: theme.typography.fontFamily,
          fontSize: "14px",
          cursor: "pointer",
          '&:hover': {
              backgroundColor: "#e63946",
              color:"white"
          }
      }
  }),
);



const ItemActivity: React.FunctionComponent<IItemActivityProps> = ({activity, delActivity, saveActivity}) => {

    const classes = useStyles()
  
    const [activityState, setActivityState] = useState<IActivity>(activity);

    function handleInput(e: any){
        console.log("input", e.target.type)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        setActivityState((prevState: IActivity) => ({
            ...prevState, [e.target.name]: value
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
        
        <Grid container xs={12} sm={6} md={3} item justify="center" alignItems="center" >
            <form onChange={handleInput}>
                <Grid item className={classes.root}>
                    <Input name="name" defaultValue={activityState.name} />
                    <Box display="flex" alignItems="center" justifyContent="space-between" style={{marginTop: "1rem", width: "100%"}}>
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <input type="checkbox" name="completed" defaultChecked={activity.completed} style={{marginRight: "5px"}}/>
                            <label>Completato</label>
                        </Box>
                        <button className={classes.button} onClick={() => delActivity(activityState)}>
                            Elimina
                        </button>
                    </Box>
                </Grid>
            </form>
        </Grid>
    )
    
};

export default ItemActivity;
