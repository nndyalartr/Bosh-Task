import React from 'react';
function contactDet(props) {
  return <>
    {/* <pre>{JSON.stringify(props.obj)}</pre> */}
        <div className="card">
        <div className="card-header bg-success">
            <img className='img img-fluid ml-5' src={props.obj.picture.large} alt="" />
        </div>
        <div className="card-body">
            <h6>Name : {(props.obj.name.title)+(props.obj.name.first)+(props.obj.name.last)}</h6>
            <hr />
            <h6>Gender : {props.obj.gender}</h6>
            <hr />
            <h6>Phone Number : {props.obj.phone}</h6>
            <hr />
            <h6>Age : {props.obj.dob.age}</h6>
            
        </div>
    </div>
  </>;
}

export default contactDet;
