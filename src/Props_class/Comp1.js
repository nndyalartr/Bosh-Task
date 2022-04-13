import React from 'react';
import Comp2 from './Comp2';
function Comp1(props) {
    let name = "rahul"
    let salary = 49000
        let color = ['red', 'blue', 'green']
  return <div>
      <h1>comp 1 text</h1>
      <Comp2 name = {name} sal = {salary} color = {color} />
  </div>;
}

export default Comp1;
// import React, { Component } from 'react';
// import Comp2 from './Comp2';

// class Comp1 extends Component {
//   render() {
//     this.emp = {name :'ravi', sal : 49000, city : 'vizag'};
//     return <div>
//         <h1>comp 1 content below</h1>
//         <h1>this is comp 1 content</h1>
//         <hr/>
//         <Comp2 empp = {this.emp}/>
//     </div>;
//   }
// }

// export default Comp1;

