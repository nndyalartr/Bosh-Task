import React, { Component } from 'react';

class Employee extends Component {
    
    // emp = [{id:101, name:"ravi",sal:10000, hike:20, up:""},
    //         {id:102, name:"santosh",sal:10000, hike:15, up:""},
    //         {id:103, name:"mallu",sal:20000, hike:10, up:""}]
    state = {
        emp:[{id:101, name:"ravi",sal:10000, hike:20, up:""},
            {id:102, name:"santosh",sal:10000, hike:15, up:""},
            {id:103, name:"mallu",sal:20000, hike:10, up:""}]
    }
    cal = (event)=>{
        console.log(event.target.value);
        
           
         
         
              
    };
    sub = ((event)=>{
        event.preventDefault();
        console.log(this.state)
    })
  render() {
    return (<>
            <div className="container">

            <pre>{JSON.stringify(this.state.emp)}</pre>

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
                                {this.state.emp.map((i)=>{                                    
                                    return (                                        
                                        <tr key={i.id}>
                                            <td>{i.id}</td>
                                            <td>{i.name}</td>
                                            <td>{i.sal}</td>
                                            <td><input onChange={this.cal} name={i.up} /></td>
                                            <td>{(i.sal/100)*i.hike }</td>
                                            <td>{(i.sal/100 * i.hike)+i.sal}</td>
                                            <td>{i.up}{console.log("test")}</td>
                                        </tr>
                                    );                                     
                                })}                            
                                
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
