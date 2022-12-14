import { useState } from "react";
import "./Register.css";

export default function Register() {
    const [user, setUser] = useState({})

    function handleSubmit (event) {
        event.preventDefault()
        console.log(user);
        console.log(user.name);
        console.log(user.address);
        // console.log(event.target.email.value)
    }

  return (
    <div className="register-form">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} action="">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input 
            onInput={(e) => {
                user.email = e.target.value;
                setUser(user);
            }}
            name = "email"
            className="form-control" 
            type="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            First Name
          </label>
          <input 
            onInput={(e) => {
                if(!user.name) user.name = {}
                user.name.firstname = e.target.value;
                setUser(user);
            }}
            name = "firstname"
            className="form-control" 
            type="text" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Last Name
          </label>
          <input 
            onInput={(e) => {
                if(!user.name) user.name = {}
                user.name.lastname = e.target.value;
                setUser(user);
            }}
            className="form-control" 
            type="text"
             />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input 
            onInput={(e) => {
                user.username = e.target.value;
                setUser(user);
            }}
          className="form-control" type="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Phone
          </label>
          <input 
            onInput={(e) => {
                user.password = e.target.value;
                setUser(user);
            }}
          className="form-control" type="number" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input 
            onInput={(e) => {
                user.password = e.target.value;
                setUser(user);
            }}
          className="form-control" type="password" />
        </div>
        <h4>Address</h4>
        <div className="row">
          <div className="mb-3 col-6">
            <input 
                onInput={(e) => {
                    if (!user.address) user.address = {}
                    user.address.city = e.target.value;
                    setUser(user);
                }}
            placeholder="City" className="form-control" type="text" />
          </div>
          <div className="mb-3 col-6">
            <input 
            onInput={(e) => {
                if (!user.address) user.address = {}
                user.address.street = e.target.value;
                setUser(user);
            }}
            placeholder="Street" className="form-control" type="text" />
          </div>
          <div className="mb-3 col-6">
            <input
                onInput={(e) => {
                    if (!user.address) user.address = {}
                    user.address.number = e.target.value;
                    setUser(user);
                }} 
            placeholder="Flat No" className="form-control" type="text" />
          </div>
          <div className="mb-3 col-6">
            <input
                onInput={(e) => {
                    if (!user.address) user.address = {}
                    user.address.zipcode = e.target.value;
                    setUser(user);
                }}
              placeholder="Pin Code"
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary float-end">
          Register
        </button>
      </form>
    </div>
  );
}
