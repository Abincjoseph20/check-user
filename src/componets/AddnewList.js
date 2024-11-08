import React from "react";


function AddNewList(props){
    return(
            <div>
                <input value={props.titleInput} onChange={props.handleChange}/>
                <input value={props.descrInput} onChange={props.handleDescrChange}/>
                <span>is active</span>
                <input type="checkbox" checked={props.isActive} onChange={props.handleActiveChange} />
                <button onClick={props.handleClick}>click</button>
            </div>
    );
}

export default AddNewList;