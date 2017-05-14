import React from 'react';

class CatAdmin extends React.Component{
    constructor(props){
        super(props);
    }
    onClickSave(){
        this.props.onSave(this.temp);
    }
    onNameChange(e){
        this.temp.name = e.target.value;
        this.forceUpdate();
    }
    onClicksChange(e){
        this.temp.numClicks = e.target.value;
        this.forceUpdate();
    }
    onImgChange(e){
        this.temp.thumbnail = e.target.value;
        this.forceUpdate();
    }
    render(){
        console.log("render");
        if(!this.props.cat){
            return <div className="cat-admin">
            </div>;
        }
        else{
            if(!this.temp){
                this.temp = JSON.parse(JSON.stringify(this.props.cat));
            }
            console.log(this.temp);
            var className = (this.props.mode === "admin") ? "cat-admin" : "cat-admin cat-admin-hidden";
            return <div className={className}>
                <p>Name:    <input  onChange={this.onNameChange.bind(this)}         type='text'             value={this.temp.name || ""}/></p>
                <p>#Clicks: <input  onChange={this.onClicksChange.bind(this)}       type='numeric'          value={this.temp.numClicks || 0}/></p>
                <p>Image:   <input  onChange={this.onImgChange.bind(this)}          type='text'             value={this.temp.thumbnail || ""}/></p>
                <button             onClick={this.onClickSave.bind(this)}>Save</button>
            </div>;
        }
    }
}

export default CatAdmin;
