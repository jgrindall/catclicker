import React from 'react';

class CatAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state = JSON.parse(JSON.stringify(props.cat));
    }
    onClickSave(){
        this.props.onSave(this.state);
    }
    onNameChange(e){
        if(e.target.value){
            this.setState({"name":e.target.value});
        }
    }
    onClicksChange(e){
        this.setState({"numClicks":parseInt(e.target.value)});
    }
    onImgChange(e){
        if(e.target.value){
            this.setState({"thumbnail":e.target.value});
        }
    }
    render(){
        return <div className="cat-admin">
            <p>Name:    <input  onChange={this.onNameChange.bind(this)}         type='text'             value={this.state.name || ""}/></p>
            <p>#Clicks: <input  onChange={this.onClicksChange.bind(this)}       type='number'          value={this.state.numClicks || 0}/></p>
            <p>Image:   <input  onChange={this.onImgChange.bind(this)}          type='text'             value={this.state.thumbnail || ""}/></p>
            <button             onClick={this.onClickSave.bind(this)}>Save</button>
        </div>;
    }
}

export default CatAdmin;
