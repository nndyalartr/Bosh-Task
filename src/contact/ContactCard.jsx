import React, { Component } from 'react'

class ContactCard extends Component {
  render() {
    return (
      <div>
      <pre>{JSON.stringify(this.props.ind)}</pre>
      <div className="card">
         <div className="card-header bg-success">
             <img className='img img-fluid ml-5' src={this.props.ind.picture.large} alt="" />
         </div>
         <div className="card-body">
             <h6>Name : {(this.props.ind.name.title)+(this.props.ind.name.first)+(this.props.ind.name.last)}</h6>
             <hr />
             <h6>Gender : {this.props.ind.gender}</h6>
             <hr />
             <h6>Phone Number : {this.props.ind.phone}</h6>
             <hr />
             <h6>Age : {this.props.ind.dob.age}</h6>
            
         </div>
     </div>
      </div>
    )
  }
}

export default ContactCard
// import React, { Component } from 'react';

// class ContactCard extends Component {
//   render() {
//     return <>
//     <pre>{JSON.stringify(this.props.obj)}</pre>
//         <div className="card">
//         <div className="card-header bg-success">
//             <img className='img img-fluid ml-5' src={this.props.obj.picture.large} alt="" />
//         </div>
//         <div className="card-body">
//             <h6>Name : {(this.props.obj.name.title)+(this.props.obj.name.first)+(this.props.obj.name.last)}</h6>
//             <hr />
//             <h6>Gender : {this.props.obj.gender}</h6>
//             <hr />
//             <h6>Phone Number : {this.props.obj.phone}</h6>
//             <hr />
//             <h6>Age : {this.props.obj.dob.age}</h6>
            
//         </div>
//     </div>
//     </>;
//   }
// }

// export default ContactCard;
