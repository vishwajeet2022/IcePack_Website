import React, { useState } from 'react';


const Contact=()=>{
const [data, setData]=useState({
    fullName:'',
    mobile: '',
    email: '',
    message: '',
    city: '',
});
//const cities='https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters';

const inputEvent=(e)=>{
const {name, value}=e.target;

setData((preVal)=>{
   return{
    ...preVal,
    [name]: value,
   };
});
}

const submitEvent=(e)=>{
    e.preventDefault();
    alert(` 
    I am ${data.fullName}  
    Phone: ${data.mobile}  
    Email: ${data.email}  
    My message is: ${data.message}
    I live in: ${data.city}`)
}

  return (
    <>
    <div className='my-4'>
        <h1 className='text-center'>Contact</h1>
    </div>
    <div className='container contact_div'>
        <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
<form  className='form-control-sm mb-4 mx-4' onSubmit={submitEvent}>
<div className="mb-2 ">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name='fullName' value={data.fullName} onChange={inputEvent} placeholder="Enter your name" />
</div>

<div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Mobile</label>
  <input type="number" className="form-control" id="exampleFormControlInput1"  name='mobile' value={data.mobile} onChange={inputEvent} placeholder="Enter your contact no." />
</div>

<div className="mb-2">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1"  name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" />
</div>

<div className="mb-2">
<label for="exampleDataList" className="form-label">Your City</label>
<input className="form-control" list="datalistOptions" id="exampleDataList"name='city' value={data.city} onChange={inputEvent} placeholder="Type to search..." />
</div>

<div className="mb-2">
  <label for="exampleFormControlTextarea1" className="form-label">Write to us</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"  name='message' value={data.message} onChange={inputEvent} rows="3"></textarea>
</div>

<div className="col-12">
    <button className="btn btn-outline-secondary mb-4" type="submit">Submit form</button>
  </div>
</form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact;

/*
<datalist id="datalistOptions">
  <option value="San Francisco" />
  <option value="New York" />
  <option value="Seattle" />
  <option value="Los Angeles" />
  <option value="Chicago" />
</datalist> 
*/