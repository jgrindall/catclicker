import React from 'react';

class CatAdmin extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(){
        this.props.onClickThumb(this.props.cat.id);
    }
    render(){
        if(!this.props.cat){
            return <div className="cat-admin">
            </div>;
        }
        else{
            return <div className="cat-admin">
                <p>{this.props.cat.name}</p>
                <p>{this.props.cat.numClicks || 0} clicks</p>
            </div>;
        }
    }
}

export default CatAdmin;
