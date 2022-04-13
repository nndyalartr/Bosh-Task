import React, { Component } from 'react';

class Employee extends Component {
    
   
    state = {id:101, name:"ravi",sal:10000, hike:20, up:""}
            
    
    cal = (event)=>{
        console.log(event.target.value);
               
         this.setState({
             [event.target.name]:event.target.value
          })        
            
    };
    sub = ((event)=>{
        event.preventDefault();
        console.log(this.state)
    })
  render() {
    return (<>
            <div className="container">

            <pre>{JSON.stringify(this.state)}</pre>

                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.sub}>
                        <table className='table'>
                            <thead className='bg-light'>
                                <tr>
                                    <th>Id</th>
                                    <th>name</th>
                                    <th>salary</th>
                                    <th>hike %</th>
                                    <th>hike amount</th>
                                    <th>net payable</th>
                                    <th>auto</th>
                                </tr>
                            </thead>
                            <tbody>
                                                               
                                                                        
                                        <tr key={this.state.id}>
                                            <td>{this.state.id}</td>
                                            <td>{this.state.name}</td>
                                            <td>{this.state.sal}</td>
                                            <td><input onChange={this.cal} name='up'  /></td>
                                            <td>{(this.state.sal/100)*this.state.hike }</td>
                                            <td>{(this.state.sal/100 * this.state.hike)+this.state.sal}</td>
                                            <td>{this.state.up}{console.log("test")}</td>
                                        </tr>
                                                                      
                                                        
                                
                            </tbody>
                        </table>   
                        <input type="submit" value="sub"/>
                        </form>
                        
                    </div>
                </div>
            </div>
            </>)
        }
        }

export default Employee;