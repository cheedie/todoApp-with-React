import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import List from "../components/list";
import Alert from "../components/Alert";
import { taskAction } from "../store/actions/task-action";
import { IS_AUTHENTICATED, USER_DETAILS, LOGOUT } from "../store/constants";

const Dashboard = () => {
  const { userDetails } = useSelector((state) => state.auth);
  const { task } = useSelector((state) => state);
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        completedTask: false,
      };
      setList([...list, newItem]);
      dispatch(taskAction(newItem));
      setName("");
    }
  };

  const editPost = () => {
    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const completeItem = (id) => {
    task.forEach((task) => {});
  };

  const handleLogout = () => {
    dispatch({ type: IS_AUTHENTICATED, payload: false });
    dispatch({ type: USER_DETAILS, payload: null });
  };

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth]);
  return (
    <main>
      <header className="header">
        <div className="section">
          <h3>ACE IT</h3>
          <div>
            <button onClick={handleLogout} className="btn">
              log out
            </button>
          </div>
        </div>
      </header>

      <section className="section-center">
        <p>Hello! {userDetails.userName} Welcome to Ace It.</p>
        <form action="" onSubmit={handleSubmit} className="form-center">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <div className="form-controls">
            <input
              type="text"
              className="task"
              placeholder="Enter your task...."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>

        {task.length > 0 && (
          <div className="task-container">
            <List
              items={task}
              removeItem={removeItem}
              editItem={editItem}
              completeItem={completeItem}
            />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
