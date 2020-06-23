import React, { Component } from 'react';
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import uuid from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state={
    items:[],
    id:0,
    item:'',
    editItem:false
  }
  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    })
  };
  handleSubmit = e =>{
    e.preventDefault();
    
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const updatedItems=[...this.state.items, newItem];
    this.setState({
      items:updatedItems,
      id:this.state.id+1,
      item:"",
      editItem:false
    })
  };
  onClear= ()=>{
    this.setState({
      items:[],
      id:0,
      item:'',
      editItem:false
    })
  };
  handleDelete=(id)=>{
    const updatedAraay=this.state.items.filter(element=>element.id!==id)
    this.setState({
      items:updatedAraay
    })
  };
  handleEdit=(id)=>{
    const updatedAraay=this.state.items.filter(element=>element.id!==id)

    const selectedItem=this.state.items.find(item=>item.id===id);

    this.setState({
      items:updatedAraay,
      item:selectedItem.title,
      editItem:true
    })
  };
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
            text={this.state.editItem?"Edit the item":"Add the item"}
            btncolor={this.state.editItem?"btn-success":"btn-primary"}
            />
            <TodoList items={this.state.items} onClear={this.onClear} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} />
            </div>
        </div>
      </div>
    )
  }
}

export default App
