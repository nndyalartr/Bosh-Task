import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Todo extends Component {

    constructor(){
        
        super();
        this.state = {name:"", person:"", currentdate:"", list:[], cmplist:[]}   
        this.deleteItem=this.deleteItem.bind(this);
        this.getind=this.getind.bind(this); 
    }    
    changeHandler=((e)=>{
        this.setState({[e.target.name]:e.target.value})
    })
    addtodo=(()=>{
        if(this.state.name !== '' ){
            const userinput = {              
                id : this.state.list.length + 1, 
                name : this.state.name,
                person : this.state.person,
            };        
            const list = [...this.state.list];
            list.push(userinput);         
            this.setState({
                list,
                name:""
            });
            }
    })
    getind=(i)=>{
        const cmplist = [...this.state.cmplist];
        var today = new Date()
        var date=today.getFullYear()+ '-'+(today.getMonth()+1)+ '-'+today.getDate()+' '+ today.getHours()+':'+today.getMinutes()+'hrs';
        
        const userdata ={
            id:this.state.cmplist.length+1,
            name:i.name,
            person:i.person,
            currentdate:date
        };        
        cmplist.push(userdata)
        this.setState({
            cmplist, 
        })
    this.deleteItem();
    }
   
    deleteItem(key){
        const list = [...this.state.list];   
        const updateList = list.filter(i => i.id !== key);       
        this.setState({
        list:updateList,
        });    
    }    
  render() {
    return (
      <>
      {/* <pre>{JSON.stringify(this.state)}</pre> */}
      <Navbar/>
      <div className="containner mt-5">
          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-5">
                  <input type="text" className='form-control ml-20' placeholder='Enter ur task' name='name' onChange={this.changeHandler}/>
                  <input type="text" className='form-control ml-20 mt-2 mb-1' placeholder='task assigned to' name='person' onChange={this.changeHandler}/>
                  <button className='btn btn-primary' onClick={this.addtodo}>Add</button>
              </div>
              
              <div className="col-md-5">
                  <h1>Completed Task list</h1>
              </div>
          </div>
      </div>
      <div className="container mt-2">
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6">
                  <table className='table'>
                      <thead className='thead bg-light'>
                          <tr>
                              <th>Sl No</th>
                              <th>Todo name</th>
                              <th>Assigned To</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.state.list.map((i)=>{
                              return(                            
                                  <tr key={i.id} >
                                      <td>{i.id}</td>
                                      <td>{i.name}</td>
                                      <td>{i.person}</td>
                                      <td ><button className='btn btn-danger mr-3' onClick={()=>this.deleteItem(i.id,i.value)} >delete</button ><button className='btn btn-success' onClick={this.getind.bind(this,i)}>complete</button></td>
                                  </tr>
                              )
                          })}
                      </tbody>
                  </table>
              </div>              
              <div className="col-md-5">                  
                  <table className='table'>                      
                        <thead className='thead bg-light'>
                            <tr>
                                <th>Sl.no</th>
                                <th>TODO Name</th>
                                <th>Done by</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {this.state.cmplist.map((i)=>{
                                return(
                                    <tr key={i.id}>
                                        <td>{i.id}</td>
                                        <td>{i.name}</td>
                                        <td>{i.person}</td>
                                        <td>{i.currentdate}</td>
                                    </tr>
                                )
                            })}
                    
                        </tbody>
                  </table>
              </div>
          </div>
      </div>
      </>
    )
  }
}

export default Todo