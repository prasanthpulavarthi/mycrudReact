import axios from "axios";
import { useNavigate } from "react-router-dom"
import React, { useState } from "react";
const AddUser = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { name, username, email, phone, website } = user
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user)
        navigate("/")

    }
    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add User</h2>
                    <form onSubmit={e => onSubmit(e)} >
                        <div className="form-group mb-2">
                            <input type="text" className="form-control form-control-lg" placeholder="enter your name" name="name" value={name} onChange={e => onInputChange(e)} />

                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control form-control-lg" placeholder="enter your username" name="username" value={username} onChange={e => onInputChange(e)} />

                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control form-control-lg" placeholder="enter your email" name="email" value={email} onChange={e => onInputChange(e)} />

                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control form-control-lg" placeholder="enter your phone number" name="phone" value={phone} onChange={e => onInputChange(e)} />

                        </div>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control form-control-lg" placeholder="enter your website" name="website" value={website} onChange={e => onInputChange(e)} />

                        </div>

                        <button className="btn btn-primary" type="submit" >Adduser</button>

                    </form>

                </div>
              
            </div>
        </>
    )
}
export default AddUser