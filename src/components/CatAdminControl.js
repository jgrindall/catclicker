import React from 'react';

class CatAdminControl extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var label = (this.props.mode !== "admin") ? "Enter admin" : "Leave"
        return <div className="cat-admin-control">
            <button onClick={this.props.onClickAdmin}>{label}</button>
        </div>;
    }
}

export default CatAdminControl;
