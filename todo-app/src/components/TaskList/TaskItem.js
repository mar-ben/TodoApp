import { useDispatch } from "react-redux";
import classes from "./TaskItem.module.css";
import { taskActions } from "../../state";
import { useState } from "react";
const TaskItem = (props) => {
  const isCompleted = props.status === "Completed" ? true : false;
  const [status, setStatus] = useState(isCompleted);

  const dispatch = useDispatch();
  const onClickDeleteHandler = (event) => {
    dispatch(taskActions.deleteTask(props.id));
    event.preventDefault();
  };

  console.log("status=" + status);

  const toggleTaskStatus = (event) => {
    setStatus(event.target.checked);
    console.log("onchange " + status);
    dispatch(
      taskActions.updateTaskStatus({
        id: props.id,
        name: props.name,
        status: event.target.checked ? "Completed" : "Active",
      })
    );
  };

  return (
    <div className={classes.taskitem}>
      <div className={classes.task}>
        <input
          className={classes.taskstatus}
          type="checkbox"
          onChange={toggleTaskStatus}
          checked={status}
        />
        <div
          className={
            status ? classes.tasklabelcompleted : classes.tasklabelactive
          }
        >
          {props.name}
        </div>
      </div>
      <button
        className={classes.taskdelete}
        type="input"
        onClick={onClickDeleteHandler}
      />
    </div>
  );
};
export default TaskItem;
