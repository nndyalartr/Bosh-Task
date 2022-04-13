import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ContactListFun from './ContactListFun';
import ContactDet from './ContactDet';

function ContactFun(props) {
    let [data, getdata] = useState([]);
    let [ind , inddata] = useState([])
    // useEffect(()=>{
    //     axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    //     .then((response)=>{
    //         getdata(response)})  
    // })
    let getjson =()=>{
        axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then((response)=>{
            getdata(response.data)})  
        }
    let sendid = (data)=>{
        console.log(data.name.last)
        inddata(data)
    }   

   
  return <>
      {/* Functional contact app */}
      {/* <pre>{JSON.stringify(data)}</pre>
      <hr />
      <pre>{JSON.stringify(ind)}</pre> */}
      {getjson()}
      <div className="container">
          <div className="row">
              <div className="col-md-8">
              {data.length > 0 ?<ContactListFun contacts={data} method={sendid} /> :null}
              </div>
              <div className="col-md-4">              
                {Object.keys(ind).length >0 ? <ContactDet obj={ind}/>:null}                
              </div>
          </div>
      </div>
      
     
      
  </>;
}

export default ContactFun;
