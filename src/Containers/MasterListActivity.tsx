import React, { useState } from 'react'
import ListActivity from '../Components/ListActivity'
import { IActivity, IListActivity } from '../type/type'

const tmp: IListActivity = {
    activities: [
        {
            id: 1,
            name: "attivita 1",
            completed: false
        },
        {
            id: 2,
            name: "attivita 2",
            completed: true
        }
    ]
}

export default function MasterListActivity() {

    const [listActivity, setListActivity] = useState<IListActivity>({} as IListActivity)

    function delAllCompleted(this: IListActivity){
        let tmpActivities: Array<IActivity> = this.activities.filter((activity: IActivity) => {
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
    

    return (
        <ListActivity />
    )
}
