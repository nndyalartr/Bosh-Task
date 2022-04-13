import React, { useEffect, useState } from 'react'

function Shopcart() {


  const [data,setdata]=useState({item:"pen", qty:'',rate:15,amount:''})
  function onchange(event){
    const{name,value}=event.target;
    setdata(data=>({...data,[name]:value}));
  }
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <input type="text" value={data.qty} name="qty" onChange={onchange} />
       <h3  value={data.amount} name="amount" onChange={onchange}>{data.qty * data.rate}</h3>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <th>sl.no</th>
            <th>name</th>
            <th>Rate</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        
        
       
      </table>

    </div>
    
  )
}

export default Shopcart