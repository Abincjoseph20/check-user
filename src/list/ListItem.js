import React from "react";
import Label from "./Label";
import './ListItem.css';

function ListItem(props) {
    console.log(props);  
    const {
        title,
        descr,
        isActive
    } = props;
    return (
        <div className='list-item'>
            <hr/>
            <div className='list-title'>
                <h4>{title}</h4>
            </div>
            <div className='list-descr'>
                {descr}  
            </div>
            <div className='list-label'>
                <Label isActive={isActive}/>
                <hr />
            </div>
        </div>
    );
}

export default ListItem;
