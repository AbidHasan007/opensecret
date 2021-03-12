import React, { Component } from "react";
import '../css/App.css';
import AddSecret from './AddSecret';
import SearchSecret from './SearchSecret';
import ListSecret from './ListSecret';
import {without} from 'lodash';


class App extends Component{


  constructor () {
    super();
    this.state = {
      mySecret: [],
      formDisplay: false,
      orderBy: 'title',
      orderDir: 'asc',
      findText:'',
      lastIndex:0
    }
    this.DeleteIt = this.DeleteIt.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addSecret = this.addSecret.bind(this);
    this.changeOrder= this.changeOrder.bind(this);
    this.searchSecret= this.searchSecret.bind(this);
  }


  toggleForm (){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  searchSecret(text){
    this.setState({findText:text})
  }

  changeOrder (order, dir){
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }
   
  addSecret(apt) {
    let tempApts = this.state.mySecret;
    apt.Id= this.state.lastIndex;
    tempApts.unshift(apt);
    this.setState({
      mySecret: tempApts,
      lastIndex: this.state.lastIndex + 1
    })
  }

  DeleteIt (apt) {
    let tempApts = this.state.mySecret;
     tempApts = without(tempApts,apt);
     this.setState({
       mySecret: tempApts
     });

  }


  componentDidMount () {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.Id =this.state.lastIndex;
          this.setState({
            lastIndex:this.state.lastIndex + 1
          });
          return item;
        })

      this.setState({
        mySecret: apts
      });
        
      });

  }

  render(){

    let order;
    let filteredSecret = this.state.mySecret;
    if(this.state.orderDir === 'asc') {
      order= 1;
    }else{
      order= -1;
    }

    filteredSecret = filteredSecret.sort( (a,b) =>{
      if (a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
            return -1 * order;
          }else{
            return 1 * order;
          }
    })
    .filter(showItem =>{
      return (
        showItem['title']
        .toLowerCase()
        .includes(this.state.findText.toLowerCase())||
      showItem['writter']
        .toLowerCase()
        .includes(this.state.findText.toLowerCase())
      );
    });

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              
              <AddSecret 
              formDisplay ={this.state.formDisplay}
              toggleForm = {this.toggleForm}
              addSecret = {this.addSecret}
              />
              <SearchSecret 
              orderBy={this.state.orderBy}
              orderDir = {this.state.orderDir}
              changeOrder ={this.changeOrder}
              searchSecret ={this.searchSecret}
              />
              <ListSecret listing = {filteredSecret}
              delete ={this.DeleteIt}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  }
}

export default App;

