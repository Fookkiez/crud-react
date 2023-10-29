import { UserContext } from "../context/UserContext";
import { useState} from 'react'

export const UserProvider = ({ children }) => {
  //global state for  react.js app

  // let title =  "SAMPLE CRUD APP"
  // let description = "This is the Description"

  // let printHelloWorld = () => {
  //     alert("hi word");
  // }

  const [users, setUsers] = useState([]);

  let addUser = (user) => [
    setUsers([...users,user])
  ]

  let deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  let updateUser = (id,name,age) => {
    const affectUser = users.map((user) => {
        if(user.id === id){
            return {...user,name:name,age:age}
        }
        return user
    })
    setUsers(affectUser);
  }

  return (
    // <UserContext.Provider value={{title, description, printHelloWorld}}>
    <UserContext.Provider value={{users,addUser,deleteUser,updateUser}}>{children}</UserContext.Provider>
  );
};
