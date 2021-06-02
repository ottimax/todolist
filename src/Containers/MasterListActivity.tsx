import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListActivity from '../Components/ListActivity'
import { IActivity, IListActivity } from '../type/type'

export default function MasterListActivity() {

    const [listActivity, setListActivity] = useState<IListActivity>({} as IListActivity)

    async function getData(){
        const apiUrl: any = process.env.REACT_APP_API_URL
        console.log(apiUrl)
        await axios.get(apiUrl)
        .then(res => {
            setListActivity(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    console.log("list", listActivity)

    

    function delAllCompleted(){
        let tmpActivities: Array<IActivity> = listActivity.activities.filter((activity: IActivity) => {
            return activity.completed !== true
        })

        setListActivity((prevState: IListActivity) => ({
            ...prevState, activities: tmpActivities 
        }))
    }

    function addActivity(){
        let tmpActivities: Array<IActivity> = listActivity.activities
        const id = listActivity.activities[listActivity.activities.length - 1].id + 1
        
        tmpActivities.push({
            id: id,
            completed: false,
            name: "attivita"
        } as IActivity)

        setListActivity((prevState: IListActivity) => ({
            ...prevState, activities: tmpActivities 
        }))
    }

    function delActivity(activity: IActivity){
        let tmpActivities: Array<IActivity> = listActivity.activities.filter((act: IActivity) => {
            return act.id !== activity.id 
        })

        setListActivity((prevState: IListActivity) => ({
            ...prevState, activities: tmpActivities 
        }))
    }

    function saveActivity(activity: IActivity){
        let tmpActivities: Array<IActivity> = listActivity.activities
        
        const index = listActivity.activities.findIndex((tmpActivity: IActivity) => {
            return tmpActivity.id === activity.id
        })

        tmpActivities[index] = activity

        setListActivity((prevState: IListActivity) => ({
            ...prevState, activities: tmpActivities 
        }))
    }

    useEffect(() => {
        getData()
    }, []);
    

    return (
        <ListActivity  listActivity={listActivity} addActivity={addActivity} delAllCompleted={delAllCompleted} delActivity={delActivity} saveActivity={saveActivity}   />
    )
}
