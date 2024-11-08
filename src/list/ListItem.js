import React from "react";
import Label from "./Label";
import './ListItem.css';

function ListItem(props) {
    console.log(props);  
    const { // this is props 
        title,
        descr,
        isActive,
        onDelete,
        onLabelClick
    } = props;
    return (
        <div className='list-item'>
            <hr/>
            <div className='list-title'>
                <h4>{title}</h4>
                <label onClick={onDelete}>delete</label>
            </div>
            <div className='list-descr'>
                {descr}  
            </div>
            <div  className='list-label'>
                <Label isActive={isActive}   onAction={onLabelClick}/>
                <hr />
            </div>
        </div>
    );
}

export default ListItem;
