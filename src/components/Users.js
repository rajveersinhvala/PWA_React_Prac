import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Users = () => {
  const [data, setData] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        localStorage.setItem("users", JSON.stringify(result));
      })
      .catch((e) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        // alert("Catch Block");
      });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Ele, index) => {
            return (
              <tr>
                <td>{Ele.id}</td>
                <td>{Ele.name}</td>
                <td>{Ele.username}</td>
                <td>{Ele.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
