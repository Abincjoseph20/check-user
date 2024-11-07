import React from "react";
import ListItem from "./ListItem";

const obj =[
    {
        title:'october',
        descr:'bla bla bal bla bla bal',
        isActive:true
    },
    {
        title:'novmber',
        descr:'bla bla bal bla bla bal',
        isActive:false
    },
    {
        title:'december',
        descr:'bla bla bal bla bla bal',
        isActive:true
    }
];


class List extends React.Component{
    render(){
        return(
            <div className="app-list">
            <ListItem title={obj.title}  descr={obj.descr} isActive={obj.isActive}/>
      </div>
        );
    } 
}

export default List;