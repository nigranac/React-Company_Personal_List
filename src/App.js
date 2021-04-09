import "./App.css";
import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { User } from "./components/User";
import { Preloader } from "./components/Preloader";

function App() {
  const [users, setUsers] = useState(false);

  function fetchUsersNew() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resp) => {
        setUsers(resp);
      });
  }

  function filterUsers(id) {
    console.log("id", id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchUsersNew();
    }, 500);
  }, []);

  return (
    <div className="App">
      <h1>Contacts</h1>
      <div className="row">
        {users.length > 0 ? (
          users.map((user, index) => {
            return (
              <User
                info={user}
                key={index}
                removeUser={(id) => filterUsers(id)}
              />
            );
          })
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
}

export default App;