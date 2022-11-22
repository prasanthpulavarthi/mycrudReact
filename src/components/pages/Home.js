import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users")
        setUsers(result.data)
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers()
    }
    return (
        <>
            <Container>
                <h1>home page</h1>
                <Table striped bordered hover>
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>#</th>
                            <th> Name</th>
                            <th>user Name</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary p-2 m-1" to={`/user/${user.id}`}><i class="bi bi-eye-fill"></i></Link>
                                    <Link className="btn btn-outline-primary p-2 m-1" to={`/user/edit/${user.id}`}>edit</Link>
                                    <Link className="btn btn-danger" onClick={() => deleteUser(user.id)}>delete</Link>

                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Container>
        </>
    )
}
export default Home