import React from 'react'
import { IItemActivityProps } from '../type/type';

const ItemActivity: React.FunctionComponent<IItemActivityProps> = ({activity, delActivity, saveActivity}) => {
  
    // const listToRender = props.listActivity.activities.map(activity => {
    //     return 
    // })

    return <p>{activity.name}</p>;
};

export default ItemActivity;
