import React, { Component } from 'react'

class ContactList extends Component {
    getindividual=((i)=>{
            console.log(i);
            this.props.method1(i);
    })
  render() {
    return (
      <div>
           <div className="container">
              <div className="row">
                  <div className="col">
                      <table className='table'>
                          <thead className='thead'>
                              <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>country</th>
                              </tr>                              
                          </thead>
                          <tbody>
                            {this.props.contact.map((i)=>{
                                return(
                                    <tr key={i.login.uuid} onClick={this.getindividual.bind(this,i)}>
                                        <td>{i.login.uuid.substring(32,36)}</td>
                                        <td>{i.name.first}</td>
                                        <td>{i.dob.age}</td>
                                        <td>{i.location.country}</td>
                                    </tr>
                                )
                            })}
                          </tbody>
                      </table>                      
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default ContactList
// import React, { Component } from 'react';

// class ContactList extends Component {
//     getdet=(i)=>{        
//         this.props.method1(i);
//     }
//   render() {
//     return <div>
//         <pre>{JSON.stringify(this.props)}</pre>
//         <table className="table table-light">
//         <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Country</th>
//             </tr>
//         </thead>
//         <tbody>
//             {this.props.contactss.map((i)=>{
//                 return(
//                 <tr key={i.login.uuid} onMouseOver={this.getdet.bind(this,i)}>
//                 <td>{i.login.uuid.substring(32,36)}</td>
//                 <td>{i.name.last}</td>
//                 <td>{i.email}</td>
//                 <td>{i.location.country}</td>
//             </tr>
//                 )
//             })}
            
//         </tbody>
//     </table>
//     </div>;
//   }
// }

// export default ContactList;
