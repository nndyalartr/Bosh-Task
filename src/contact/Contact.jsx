import React, { Component } from 'react'
import axios from 'axios';
import ContactList from './ContactList';
import ContactCard from './ContactCard';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state ={
            contacts:[],
            ind:{}
        }
    }
    componentDidMount(){
        axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response)=>{
            this.setState({contacts:response.data})
        });        
    }
    geti =((i)=>{
        this.setState({ind:i})
    })
  render() {
    return (
      <div>
          <pre>{JSON.stringify(this.state.contacts)}</pre>
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                    {this.state.contacts.length>0 ? <ContactList contact={this.state.contacts} method1={this.geti}/> : null}
                  </div>
                  <div className="col-md-4">
                    {Object.keys(this.state.ind).length>0 ? <ContactCard ind={this.state.ind}/>:null}
                  </div>
              </div>
          </div>
         
            
      </div>
    )
  }
}

export default Contact
// import React, { Component } from 'react';
// import axios from 'axios';
// import ContactList from './ContactList';
// import ContactCard from './ContactCard';
// class contact extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             contacts:[],
//             selelctedsingle: {},
//         };
        
//     };
//     getindividual =(i)=>{
        
//         console.log(i.name.last);
//         this.setState({selelctedsingle:i}) 

//     }
//     componentDidMount(){
//         axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
//         .then((response)=>{
//             this.setState({contacts:response.data})
//         })
//     }
//   render() {
//     return <>
//     <pre>{JSON.stringify(this.state)}</pre>
//         <div className="container">
//         <div className="row">
            
//             <div className="col-md-8">
//             {this.state.contacts.length > 0 ?<ContactList contactss={this.state.contacts} method1={this.getindividual} /> :null}
//             </div>
//             <div className="col-md-4">
//             {Object.keys(this.state.selelctedsingle).length > 0 ?<ContactCard contacts={this.state.contacts} obj={this.state.selelctedsingle} /> :null}
//             </div>
//         </div>
//     </div>        
//     </>;
//   }
// }

// export default contact;
