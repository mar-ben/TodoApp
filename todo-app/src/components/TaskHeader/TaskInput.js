import classes from "./TaskInput.module.css";
const TaskInput = () => {
  return (
    <input
      className={classes.input}
      type="text"
      name="task"
      placeholder="Add a new Task..."
    />
  );
};
export default TaskInput;
