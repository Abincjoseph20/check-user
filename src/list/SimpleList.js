import React from "react";
import ListItem from "./ListItem";

function SimpleList(props){
    const {
        data,
        onAction
    } = props;
    return(
        <div className="app-list">
            {
            data.map((obj)=>{ 
                return <ListItem key={obj.title} 
                                title={obj.title}
                                descr={obj.descr}
                                isActive={obj.isActive}
                                onDelete={()=>{
                                    onAction(obj);
                                }}
                                //onDelete={this.handleDelete} // onDelete is properly passed here
                                /> 
                                //this is array itration or looping  which is used in map() method 
            })                  //map return the list items
            }
        </div>
    );

}
export default SimpleList;