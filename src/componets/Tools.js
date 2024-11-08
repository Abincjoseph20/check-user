import React from "react";
import "./Tools.css"
import AddNew from "./AddNew";

class Tools extends React.Component{

    render(){
        const{
            children,
            onAction,
            labelValaue,
            onAdd,
        } = this.props;

        // const onlyChild = React.Children.only(children);
        // const count = React.Children.count(onlyChild.props.Children);

        const onlyChild =React.Children.only(children);
        const count=React.Children.count(onlyChild.props.children);

        return(
            <div className="list-tools">
                <div className="list-hedder">
                    <select value={labelValaue} onChange={onAction} name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Non-Active</option>
                    </select>
                </div>
                <br/>
                <AddNew onAdd={onAdd}/>
                {children}
                <div className="list-footer">
                    Total count is {count} 
                </div>
            </div>
        );
    }
}
export default Tools;