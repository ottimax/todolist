export type IListActivity = {
    activities: Array<IActivity>,
    delAllCompleted?: Function,
    addActivity?: Function,
    delActivity?: Function
}

export type IActivity = {
    id: number,
    name: string,
    completed: boolean,
}
