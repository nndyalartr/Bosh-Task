import React, { Component } from 'react';

class Cart extends Component {
    state = {name:"dell isperon",
            Rate:49000,
            Qty:0,
    }
    incr = ()=> {
        this.setState({Qty:this.state.Qty+1})
    }  
    decr = ()=> {
        this.setState({Qty: this.state.Qty-1})
    }        
  render() {

    return <>
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <table className="table table-bg-light">
                        <thead>
                            <th>Product Name</th>
                            <th>Rate</th>
                            <th>Qty</th>
                            <th>Amount</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.name}</td>
                                <td>{this.state.Rate}</td>
                                <td><i class="fas fa-minus-circle" onClick={this.decr}> </i> {this.state.Qty} <i class="fas fa-plus-circle" onClick={this.incr}> </i></td>
                                <td>{this.state.Rate * this.state.Qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>;
  }
}

export default Cart;
