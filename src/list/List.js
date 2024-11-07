import React from "react";
import ListItem from "./ListItem";
import Tools from "../componets/Tools";

let arr =[
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



    constructor(props){
        super(props);

        this.state = {
            data: arr // Initialize state with the original array
        };
    }

    // evt means event what type of event is running in this case select is the event
    // ent.terget means where the event is running in this case select box is the target
    // ent.terget.value it depents on value the value is pointing which value is selected active,non,active or all
    onListChange=(evt)=>{
        // console.log(evt.target.value);
        const value = evt.target.value;
        // basicaly this filter method is use for remove or delete the array elements.
        const newList = arr.filter((item)=>{
            if(value === 'all'){
                return true;
            }
            if(value === 'active'){
                return item.isActive === true;
            }
            if(value === 'non-active'){
                return item.isActive === false;
            }
            return false;
        });
        console.log(newList);

        // arr = newList;
        this.setState({
            data: newList,
        });
    
    }
    



    render(){
        return(
            // children props is using for access inside the child element of a componet

            //here onAction is a props name
            <Tools onAction={this.onListChange}>  
                <div className="app-list">
                {
                this.state.data.map((obj)=>{ 
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