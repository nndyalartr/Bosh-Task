import React, { useCallback } from 'react';

function ContactListFun(props) {     
    function getind(event, data){
        // console.log(event.target.value);
        console.log(data.email)   
        props.method(data) 
      }
      
    // let getind=()=>{
    //     console.log("test")
    // }    
    // let getind = useCallback(()=>{
    //     console.log("test")
    // })
  return <>
    
      {/* <h3>list component</h3> */}
      {/* <pre>{JSON.stringify(props.contacts)}</pre> */}
      <hr />
    
      <table className="table table-light table-striped">
        <thead className="thead-light">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>                    
            {(props.contacts).map((i)=>{
                return(
                    <tr key={i.login.uuid} onClick={(event) => getind(event, i)} >
                        <td>{i.login.uuid.substring(32,36)}</td>
                        <td>{i.name.last}</td>
                        <td>{i.email}</td>
                        <td>{i.location.country}</td>
                    </tr>
                )
            })}
            
        </tbody>
        </table>
        
        
           
  </>;
}

export default ContactListFun;
