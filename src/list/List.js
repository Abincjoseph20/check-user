import React from "react";
import ListItem from "./ListItem";
import Tools from "../componets/Tools";

const arr =[
    {
        title:'october',
        descr:'bla bla bal bla bla bal',
        isActive:true
    },
    {
        title:'november',
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
            // children props is using for access inside the child element of a componet
            <Tools> 
                <div className="app-list">
                {
                arr.map((obj)=>{ 
                    return <ListItem key={obj.title} 
                                    title={obj.title}
                                    descr={obj.descr}
                                    isActive={obj.isActive}
                                    /> 
                                    //this is array itration or looping  which is used in map() method 
                })                  //map return the list items
                }
            </div>
           </Tools>
        );
    } 
}

export default List;