import React from 'react';

class CatDetail extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(){
        this.props.onClickThumb(this.props.cat.id);
    }
    render(){
        if(!this.props.cat){
            return <div className="cat-detail">
            </div>;
        }
        else{
            return <div className="cat-detail">
                <p>{this.props.cat.name}</p>
                <p>{this.props.cat.numClicks || 0} clicks</p>
                <img onClick={this.onClick.bind(this)} src={"/img/" + this.props.cat.thumbnail}/>
            </div>;
        }
    }
}

export default CatDetail;
