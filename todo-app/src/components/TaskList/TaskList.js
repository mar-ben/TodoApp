import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";
const TaskList = (props) => {
  const tasks = ["Buy Milk", "Buy Books"];
  const taskItems = tasks.map((item) => <TaskItem name={item}> </TaskItem>);

  return <div className={classes.tasklist}>{taskItems}</div>;
};
export default TaskList;
