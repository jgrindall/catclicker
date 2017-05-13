import React from 'react';
import CatListItem from './CatListItem';

class CatList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var onSelect = this.props.onSelect;
        var onClickThumb = this.props.onClickThumb;
        var catId = this.props.cat.id;
        var items = this.props.cats.map(function(cat, i){
            var sel = (cat.id === catId);
            return <CatListItem
                className={sel ? "selected" : ""}
                onSelect={onSelect}
                cat={cat}
                key={cat.id}
            />;
        });
        return <ul>
            {items}
        </ul>;
    }
}

export default CatList;
