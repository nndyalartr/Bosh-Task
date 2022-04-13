
import React, {useEffect, useState} from 'react';
import axios from "axios"
import Assy from './Assy_finish';
function Product(props) {
    const [item, setproduct]=useState([]);    
    const getproductdata = async ()=>{
        try{
            const data = await axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist");
            setproduct(data.data);
           
        }
        catch(e){
            console.log(e)
        }
    };   
    useEffect(()=>{
        getproductdata();
    },[]); 
    const rows=[...item]
  return (
    <div>
        <Assy item={item}/>
        
    </div>
  )
}

export default Product