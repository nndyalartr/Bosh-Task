import React from 'react';

function Comp2(props) {  
  return <div>
      <pre>{JSON.stringify(props)}</pre>
      <h1>name :{props.name}</h1>
      <h1>salary :{props.sal}</h1>
      <h2>color : {props.color[2]}</h2>
  </div>;
}

export default Comp2;

// import React, { Component } from 'react';

// class Comp2 extends Component {
//   render() {
//     return <div>
//         <pre>{JSON.stringify(this.props.empp)}</pre>
//         <h1>comp 2 class content below</h1>
//         <h3>name of employe :{this.props.empp.name}</h3>
//         <h3>salary of employee : {this.props.empp.sal} </h3>
//         <h5>to print in comp 2 class</h5>
//         <hr/>
       
//     </div>;
//   }
// }
// export default Comp2;
