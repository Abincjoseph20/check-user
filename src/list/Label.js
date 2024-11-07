import React from "react";
import './Label.css'


class Label extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? {background:'green'} : {background:'red'}
        return <span className="list-label-item" style={style}> abin  </span>;
    }
}

export default Label;