import React from "react";
import Tools from "../componets/Tools";
import SimpleList from "./SimpleList";


let arr =[
    {
        id:1,
        title:'october',
        descr:'bla bla bal bla bla bal',
        isActive:true
    },
    {
        id:2,
        title:'november',
        descr:'bla bla bal bla bla bal',
        isActive:false
    },
    {
        id:3,
        title:'december',
        descr:'bla bla bal bla bla bal',
        isActive:true
    },
    {
        id:3,
        title:'janvary',
        descr:'bla bla bal bla bla bal',
        isActive:false
    }
];


class List extends React.Component{



    constructor(props){
        super(props);

        this.state = {
            data: arr, // Initialize state with the original array
            activeState:'all'
        };
    }

    // evt means event what type of event is running in this case select is the event
    // ent.terget means where the event is running in this case select box is the target
    // ent.terget.value it depents on value the value is pointing which value is selected active,non,active or all
    onListChange=(evt)=>{
        // console.log(evt.target.value);
        const value = evt.target.value;
       
        // state is change the react component 
        this.setState({
            activeState:value
        });
    
    }
    

    handleDelete = (item) => {
        console.log('delete',item);
        const newList = this.state.data.filter((element) => element.id !== item.id);
        this.setState({
            data:newList,
        });
    }
    
    handleLabalClcick=(arg)=>{
        this.setState({
            activeState:arg
        });
    }


    render(){

        const {
            data,
            activeState
        } = this.state;

        const newList = data.filter((item)=>{
            if(activeState === 'all'){
                return true;
            }
            if(activeState === 'active'){
                return item.isActive === true;
            }
            if(activeState === 'non-active'){
                return item.isActive === false;
            }
            return false;
        });
        console.log(newList);




        return(
            // children props is using for access inside the child element of a componet

            //here onAction is a props name
            <Tools labelValaue={activeState} onAction={this.onListChange}>  
               <SimpleList onLabelClick={this.handleLabalClcick} data={newList} onAction={this.handleDelete}/>
           </Tools>
        );
    } 
}

export default List;