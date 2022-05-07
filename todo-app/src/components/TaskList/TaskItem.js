import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <div className={classes.taskitem}>
      <input className={classes.taskstatus} type="checkbox" />
      <div className={classes.label}>{props.name}</div>
    </div>
  );
};
export default TaskItem;
