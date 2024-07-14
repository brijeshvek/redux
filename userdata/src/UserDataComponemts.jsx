import React, { useState } from "react";
import { deleteData, insert, upadte } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";

function UserDataComponemts() {
  // eslint-disable-next-line no-unused-vars
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    age: "",
    salery: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    let lent = data.length;
    userData.id = lent + 1;
    dispatch(insert(userData));
    setUserData({
      id: "",
      name: "",
      age: "",
      salery: "",
    });
  };
  const editData = (data)=>{
    setUserData(data)
  }
  const updataData = (e)=>{
    e.preventDefault();
    dispatch(upadte(userData.id,userData))
    setUserData({
        id:"",
        name:"",
        age:"",
        salery:""
    })
  } 
  return (
    <div>
      <form action="" method="get" onSubmit={userData.id !== '' ? updataData:saveData}>
        name:{" "}
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        age :{" "}
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
        />
        salery :{" "}
        <input
          type="text"
          name="salery"
          value={userData.salery}
          onChange={handleChange}
        />
        <input type="submit" value={userData.Id !== ''? "Updata Data":"save data"}  />
      </form>
      <table border="1px">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Salery</td>
          <td>Action</td>
        </tr>
        {data &&
          data.map((i) => {
            return (
              <>
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.salery}</td>
                  <td>
                    <button onClick={()=>editData(i)}>Edit</button>
                    <button onClick={()=>dispatch(deleteData(i.id))}>Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
}

export default UserDataComponemts;
