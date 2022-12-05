import React, {Component} from 'react';
import {List, Avatar, Button, Checkbox} from 'antd'; 
import choice from "../assets/images/choice_img.svg";

class Choice extends Component{
    state = {
            selected: []
        };
    
    onShowGMap = ()=>{
        //send this selected arr to the Main components for data communication
        //child to parent 
        this.props.onShowMap(this.state.selected); 
    }
    
    onChange = e => {
        // console.log(e.target)
        //1. get the datainfo and checked status
        //2. addorremove to or from selected list
        const { dataInfo, checked } = e.target;
        const { selected } = this.state;//get selected array
        const list = this.addOrRemove(dataInfo, checked, selected);//get updated list
        this.setState({ selected: list })//set state use the updated list to update the old list
    }

    addOrRemove = (item, status, list) => {
        //1.checked is true,if selected, 
        //then a. item is not in the list -->add
        //b. if in the list, do nothing
        //2. checked is false, if item in the list, remove
        //some method follow the callback function
        const found = list.some( entry => entry.id === item.id);
        //if not found and check status is true ===>add
        if(status && !found){
            list=[...list, item]
        }
        //else if found and check status is false ===>remove
        if(!status && found){
            list = list.filter( entry => {
                return entry.id !== item.id;
            });
        }
        // console.log(list)
        return list;
    }
    
    render(){
        const ChoiceList = this.props.CityInfo?.[0]?.pointOfInterest
        // console.log(this.props.CityInfo?.[0]?.pointOfInterest)
        const { selected } = this.state;
        
    return (
            <div>
                Please make a selection
                <hr/>  
                <List
                    className="choice-list"
                    itemLayout="horizontal"
                    size="small"
                    dataSource={ChoiceList}   
                    renderItem={item => (
                        <List.Item
                            actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar size={50} src={choice} />}
                                title={<p>{item.point_name}</p>}
                                description={`Description: ${item.description}`}
                            />
                        </List.Item>
                    )}
                />
                <Button className="choice-list-btn"
                        type="primary"
                        //disable button if selected list is null
                        disabled={ selected.length === 0}
                        onClick={this.onShowGMap}
                >Show on Map</Button>
            </div>
                
    );
}
}

export default Choice;
