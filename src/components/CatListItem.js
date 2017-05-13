import React from 'react';

class CatListItem extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(){
        this.props.onSelect(this.props.cat.id);
    }
    render(){
        return <li className="cat-list-item" onClick={this.onClick.bind(this)}>
            <div className="cat-list-item-thumb">
                <img src={"/img/" + this.props.cat.thumbnail}/>
            </div>
            <div className="cat-list-item-body">
                {this.props.cat.name}
            </div>
        </li>;
    }
}

export default CatListItem;
