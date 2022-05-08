import { useRef } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../state";

import classes from "./TaskInput.module.css";
const TaskInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!inputRef.current.value) return;

    dispatch(
      taskActions.addTask({
        name: inputRef.current.value,
        status: "Active",
      })
    );

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className={classes.input}
        type="text"
        name="task"
        ref={inputRef}
        placeholder="Add a new Task..."
      />
      <input type="submit" className={classes.submitButton} />
    </form>
  );
};
export default TaskInput;
