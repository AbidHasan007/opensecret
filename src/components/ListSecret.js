import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

class ListSecret extends Component {
    render (){

        return(
            <div className="appointment-list item-list mb-3">
                {this.props.listing.map(item => (
                     <div className="pet-item col media py-3" key={item.Id}>
                     <div className="mr-3">
                       <button className="pet-delete btn btn-sm btn-danger"
                         onClick={()=> this.props.delete(item)}>
                           <FaTimes />
                       </button>
                     </div>
         
                     <div className="pet-info media-body">
                       <div className="pet-head d-flex">
                        <span className="pet-name">{item.title}</span>
                         
                       </div>
                       <span className="apt-date">
                             <Moment 
                              date={item.aptDate}
                              parse="YYYY-MM-DD hh:mm"
                              format="MMM-D h:mma"
                             />
                         </span>
                       <div className="owner-name">
                         <span className="label-item">Writter: </span>
                         <span>{item.writter}</span>
                       </div>
                        
                       <div className="apt-notes">{item.aptNotes}</div>
                       
                     </div>
                   </div>

                ))}
         
      </div>
        );
    }
}

export default ListSecret;