import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
 
 import Contact from './contact/Contact'
 import ContactFun from './ContactFun/ContactFun';
 import Red from './Red';
 import Api from './proj_Files/Api'
 import Todo from "./todo/Todo"
 import Task1 from './todo/task/Task1';
import Mat_table from "./matui/Mat_table"
import Product from './matui/Product'
import Shopcart from './cartTask/Shopcart';
import Employee from './employees/Employee';

class App extends React.Component{
    render(){       
        return <>
        <Router>
            <Navbar />
            <Routes> 
                {/* <Route path="/Shopcart" element={<Shopcart/>} />           */}
                <Route path="/" element={<Mat_table/>} />
                {/* <Route path="/Product" element={<Product/>} /> */}
                {/* <Route path='Employee' element={<Employee/>}/>
                <Route path="/Api" element={<Api/>} />
                <Route path="/Contact" element ={<Contact/>}/>
                <Route path="/contactfun" element={<ContactFun/>}/>                
                <Route path="/Red" element={<Red/>}/> */}
                <Route path="/Todo" element={<Todo/>}/>      
                {/* <Route path="/Task1" element={<Task1/>}/>          */}
            </Routes>
        </Router>
        </>
    }
}
export default App