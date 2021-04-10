import "./App.css";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { User } from "./components/User";
import { Preloader } from "./components/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getUserlist } from "./state/action-creators/userActions";

function App() {
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.users.userlist);

  useEffect(() => {
    dispatch(getUserlist());
  }, []);

  return (
    <div className="App">
      <h1>Contacts</h1>

      <div className="row">
        {userlist?.length > 0 ? (
          userlist.map((user, index) => {
            return <User info={user} userIndex={index} key={user.id} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
}

export default App;
