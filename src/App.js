import { useState } from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions";

function App() {
  const dispatch = useDispatch();

  //  conditional rendering
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  // when someone clicks the edit icon
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  // back button click
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP REACT-REDUX</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibility={editFormVisibility}
      />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
