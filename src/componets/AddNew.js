import React from "react";
import './AddNew.css'

class AddNew extends React.Component{

    constructor(props){
        super(props);

        this.state={
            titleInput:'',
            descrInput:'',
            isActive:false
        }


    }
    
    handleChange=(evt)=>{
        const value = evt.target.value;
        this.setState({
            titleInput:value
        });
    }

    handleDescrChange=(evt)=>{
        const value = evt.target.value;
        this.setState({
            descrInput:value
        })
    }

    handleActiveChange = (evt)=>{
        const value = evt.target.checked;
        this.setState({
            isActive:value
        })
    }

    handleClick=()=>{
        console.log(this.state.titleInput);
        console.log(this.state.descrInput);
        console.log(this.state.isActive);

        const { 
            titleInput,
            descrInput,
            isActive } = this.state;

        if(titleInput){
            this.props.onAdd({
                id: Math.floor(Math.random()*100)+10,
                title:titleInput,
                descr:descrInput,
                isActive:isActive,
            });
    
      
            
            this.setState({
                titleInput:'',
                descrInput:'',
                isActive:false,
            })
        }

    }

    render(){
        return(
            <div>
                <input value={this.state.titleInput} onChange={this.handleChange}/>
                <input value={this.state.descrInput} onChange={this.handleDescrChange}/>
                <span>is active</span>
                <input type="checkbox" checked={this.state.isActive} onChange={this.handleActiveChange} />
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}

export default AddNew;



