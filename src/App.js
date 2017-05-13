import React from 'react';
import ReactDOM from 'react-dom';
import CatDetail from './components/CatDetail';
import CatAdmin from './components/CatAdmin';
import CatDefaultData from './CatDefaultData';
import CatList from './components/CatList';
import _ from 'underscore'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = this.getState();
    }
    getState(){
        var cats = window.localStorage.getItem("catData");
        if(!cats){
            cats = JSON.parse(JSON.stringify(CatDefaultData));
        }
        return {
            "cats":cats,
            "selectedCatId":cats[0].id
        };
    }
    onClickThumb(){
        var n, cats = this.state.cats, cat = this.getCat();
        if(cat){
            n = cat.numClicks || 0;
            n++;
            cat.numClicks = n;
        }
        this.setState({"cats":cats});
    }
    onSelect(catId){
        this.setState({"selectedCatId":catId});
    }
    getCat(){
        return _.findWhere(this.state.cats, {"id":this.state.selectedCatId})
    }
    render(){
        var cat = this.getCat();
        return <div className="main">
            <CatDetail onClickThumb={this.onClickThumb.bind(this)} cat={cat}/>
            <CatAdmin cat={cat}/>
            <CatList onSelect={this.onSelect.bind(this)} cat={cat} cats={this.state.cats}/>
        </div>;
    }
}

export default App;
