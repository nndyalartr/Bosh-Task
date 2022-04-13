// import React, { Component } from 'react';

// class Message extends Component {
//     constructor(props){
//         super(props)
//         this.message = 'hi good mrng'
//     }
//     changemsg = () =>{
//     this.message = 'hi changed data'
//     this.forceUpdate()    
//     }
//   render() {
//     return <div>
//         <h2>message class content</h2>
//         <h2>message is : {this.message}</h2>
//         <button className ="btn btn-primary" onClick={this.changemsg}>change</button>
//     </div>;
//   }
// }

// export default Message;
import React, { Component } from 'react';

class Message extends Component {
    state = {
        message :'hii gud night'
    }
    changemsg = () => {       
        this.setState({message:'ayyindhiroy'})
    }
    mrng = () => {       
        this.setState({message:'good morning'})
    }
  render() {
    return <div>
        <h2>message class content</h2>
        <h2>message is : {this.state.message}</h2>
        <button className='btn btn-secondary' onMouseOver={this.changemsg}>change</button>
        <button className='btn btn-danger' onMouseOver={this.mrng}>mrng</button>
    </div>;
  }
}

export default Message;
