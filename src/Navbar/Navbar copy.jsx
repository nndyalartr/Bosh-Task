import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return <>
         <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                {/* <a href="#">React Routing</a> */}
                <Link to="home"> React Routing</Link>
                <div className="collapse navbar-collapse">
                
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link to="Shopcart" className="nav-link">Shopcart</Link>
                        </li>
                    <li className="nav-item">
                            <Link to="Product" className="nav-link">mat</Link>
                        </li>
                    <li className="nav-item">
                            <Link to="Mat_table" className="nav-link">Bosch Task</Link>
                        </li>
                    <li className="nav-item">
                            <Link to="Task1" className="nav-link">Intro page</Link>
                        </li>
                        <li className="nav-item">
                            {/*   <a href="/services" className="nav-link">Services</a> */}
                            <Link to="contactfun" className="nav-link"> ContactFun</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Api" className="nav-link">Api</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="Employee" className="nav-link">employees example</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="Contact" className="nav-link">contact example</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="Red" className="nav-link">Redux example</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="Todo" className="nav-link">Todo app</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    </>;
  }
}

export default Navbar;
