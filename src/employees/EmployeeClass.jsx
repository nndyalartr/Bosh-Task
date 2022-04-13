import React, { Component } from 'react';

class EmployeeClass extends Component {
    state = {
        email:"",
        password:""
    }
    update=((event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    })
    sub = ((event)=>{
        event.preventDefault()
        console.log(this.state)
    })
  render() {
    return <>
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <form action="#" onSubmit={this.sub}>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="form-group">
                        enter name:
                        <input type="text" className='form-control' name="email" onChange={this.update}/>
                    </div>
                    <div className="form-group">
                        enter password:
                        <input className='form-control' type="text" name="password" onChange={this.update}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="submit"/>
                    </div>        
                </form>
            </div>
        </div>
    </div>
    </>;
  }
}

export default EmployeeClass;
