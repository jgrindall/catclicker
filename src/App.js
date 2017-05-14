import React from 'react';
import ReactDOM from 'react-dom';
import CatDetail from './components/CatDetail';
import CatAdmin from './components/CatAdmin';
import CatAdminControl from './components/CatAdminControl';
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
            "selectedCatId":cats[0].id,
            "adminMode":"!admin"
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
    onClickAdmin(){
        var mode = this.state.adminMode;
        this.setState({"adminMode":mode === "admin" ? "!admin" : "admin"});
    }
    onSelect(catId){
        this.setState({"selectedCatId":catId});
    }
    onSave(newCat){
        var cat = this.getCat();
        _.extend(cat, newCat);
        this.setState({"cats":this.state.cats});
    }
    getCat(){
        return _.findWhere(this.state.cats, {"id":this.state.selectedCatId})
    }
    render(){
        var cat = this.getCat();
        return <div className="main">
            <CatDetail onClickThumb={this.onClickThumb.bind(this)} cat={cat}/>
            <CatAdminControl onClickAdmin={this.onClickAdmin.bind(this)} mode={this.state.adminMode} />
            <CatAdmin onSave={this.onSave.bind(this)} mode={this.state.adminMode} cat={cat}/>
            <CatList onSelect={this.onSelect.bind(this)} cat={cat} cats={this.state.cats}/>
        </div>;
    }
}

export default App;
