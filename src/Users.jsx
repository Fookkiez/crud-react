import React, { useContext, useRef } from "react";
import { UserContext } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Table } from "react-bootstrap";
import { useState } from "react";

function Users() {
  // let { title, description, printHelloWorld } = useContext(UserContext);
  let { users, addUser, deleteUser, updateUser } = useContext(UserContext);

  const [update, setUpdate] = useState(false);
  
  const [currentId, setCurrentId] = useState(null);
  const [currentName, setCurrentName] = useState(null);
  const [currentAge, setCurrentAge] = useState(null);

  let [name, setName] = useState(null);
  let [age, setAge] = useState(null);
  let nameRef = useRef(null);
  let ageRef = useRef(null);

  let handleUsers = (e) => {
    e.preventDefault();
    console.log(e);
    let id = Date.now();
    let user = {
      id,
      name,
      age,
    };
    addUser(user);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  let handleEdit = (user) => {
    setUpdate(true);
    setCurrentId(user.id)
    setCurrentName(user.name)
    setAge(user.age)
    nameRef.current.value = user.name;
    ageRef.current.value = user.age;
  };

  let handleUpdate = (e) => {
    e.preventDefault();
    updateUser(currentId,currentName,currentAge);
    setCurrentId(null)
    setCurrentName(null)
    setCurrentAge(null)
    setUpdate(false)

    nameRef.current.value = "";
    ageRef.current.value = "";
  }

  return (
    <Container>
      <h1 className="text-center">React JS Text Center</h1>

      {update ? (
         <Form onSubmit={handleUpdate}>
         <Form.Group>
           <Form.Label>Name</Form.Label>
           <Form.Control
             type="text"
             onChange={(e) => setCurrentName(e.target.value)}
             ref={nameRef}
             placeholder="Entaer Name"
             required
           />
           <Form.Label>Age</Form.Label>
           <Form.Control
             type="text"
             onChange={(e) => setCurrentAge(e.target.value)}
             ref={ageRef}
             placeholder="Entaer Age"
             required
           />
         </Form.Group>
         <Button type="submit"> Update Data</Button>
       </Form>
      ) : (
        <Form onSubmit={handleUsers}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
              placeholder="Entaer Name"
              required
            />
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setAge(e.target.value)}
              ref={ageRef}
              placeholder="Entaer Age"
              required
            />
          </Form.Group>
          <Button type="submit"> Submit Data</Button>
        </Form>
      )}
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((u, index) => (
              <tr key={index}>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>
                  <Button onClick={() => handleEdit(u)}>Edit</Button>
                </td>
                <td>
                  <Button onClick={() => deleteUser(u.id)}>Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>

    // <div>
    //   This Title is : {title}
    //   The Desription : {description}
    //   <button onClick={() => { printHelloWorld()}}>click</button>
    // </div>
  );
}

export default Users;
