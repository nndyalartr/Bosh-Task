import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
 

 import Todo from "./todo/Todo"

import Mat_table from "./matui/Mat_table"

class App extends React.Component{
    render(){       
        return <>
        <Router>           
            <Routes>               
                <Route path="/" element={<Mat_table/>} />               
                <Route path="/Todo" element={<Todo/>}/>           
            </Routes>
        </Router>
        </>
    }
}
export default App