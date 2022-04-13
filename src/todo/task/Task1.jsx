import React, { Component } from 'react'
import "./task.css"

export class Task1 extends Component {
  render() {
    return (
        <div className="container-fluid bod">
            <div className="row">
                <div className='col-md-1 vertical'></div>
                <div className="col-md-11">                
                    <div className='lft-content'>
                        
                        <p>Health Care</p>
                    </div>
                    <div className='rgt-content'>
                    <p>Banking</p></div>   
                    <div className='lft-sub'>
                        <span>Operations</span><span className='rgt-sub-text'>Bussiness Report</span>
                    </div>
                    
                    <div className="sec-lft">
                        <p >BFSC</p>
                    </div>
                    <div className="sec-rgt">
                    <p >Logistics</p>
                    </div>

                    <div className="tr-lft">
                        <p >Utilities</p>
                    </div>
                    <div className="tr-rgt">
                    <p >Retail</p>
                    </div>

                    <div className="footer">
                        <p className='footer-txt'>Full Bussiness report</p>                        
                    </div>                                                              
                </div>                
            </div>
                
        </div>
       
    
    )
  }
}

export default Task1