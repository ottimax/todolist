export type IListActivity = {
    activities: Array<IActivity>,  
}

export type IListActivityProps = {
    listActivity: IListActivity,
    delAllCompleted: Function,
    addActivity: Function,
    delActivity: Function,
    saveActivity: Function,
}

export type IActivity = {
    id: number,
    name: string,
    completed: boolean,
}

export type IItemActivityProps = {
    activity: IActivity,
    saveActivity: Function,
    delActivity: Function
}
