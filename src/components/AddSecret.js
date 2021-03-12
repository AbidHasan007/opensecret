import React, { Component } from 'react';

import {FaPlus} from 'react-icons/fa';

class AddSecret extends Component {

    constructor() {
      super();
      this.state= {
        title: '',
        writter: '',
        aptDate:'',
        aptTime: '',
        aptNotes:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleadd = this.handleadd.bind(this);
    }

     handleadd(e){
       e.preventDefault();
       let tempApt = {
         title: this.state.title,
         writter: this.state.writter,
         aptDate: this.state.aptDate,
         aptNotes: this.state.aptNotes
       };
       this.props.addSecret(tempApt);
       this.setState({
         title: '',
        writter: '',
        aptDate:'',
        aptTime: '',
        aptNotes:''
       });
       this.props.toggleForm();
     }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        })
    }

    render (){
        return (
            <div className={
              'card textcenter mt-3 ' +
              (this.props.formDisplay ? '': 'add-appointment')
            }>
            <div className="apt-addheading card-header bg-primary text-white"
            onClick={this.props.toggleForm}
            >
              <FaPlus />Post Open Secret
            </div>
  
            <div className="card-body">
              <form id="aptForm" noValidate
              onSubmit = {this.handleadd}
              >
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="petName"
                    
                  >
                    Title
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Title of the secret"
                      value= {this.state.title}
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="ownerName"
                  >
                    Writter
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="writter"
                      placeholder="Your Name"
                      value= {this.state.writter}
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="aptDate"
                  >
                    Date
                  </label>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      name="aptDate"
                      id="aptDate"
                      value= {this.state.aptDate}
                      onChange = {this.handleChange}
                    />
                  </div>
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="aptTime"
                  >
                    Time
                  </label>
                  <div className="col-md-4">
                    <input
                      type="time"
                      className="form-control"
                      name="aptTime"
                      id="aptTime"
                      value= {this.state.aptTime}
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                    Your Secret
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      rows="4"
                      cols="50"
                      name="aptNotes"
                      id="aptNotes"
                      placeholder="Leak out here.."
                      value= {this.state.aptNotes}
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
  
                <div className="form-group form-row mb-0">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary d-block ml-auto"
                    >
                      Publish Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
        );
    }
}

export default AddSecret;