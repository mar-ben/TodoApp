import TaskFilters from "./TaskFilters";
import classes from "./TaskHeader.module.css";
import TaskInput from "./TaskInput";
const TaskHeader = (props) => {
  const today = new Date();
  const formatedDate = today.toDateString();
  const taskCount = 5;
  return (
    <div className={classes.taskheader}>
      <div className={classes.datetext}>{formatedDate} </div>
      <div className={classes.taskTools}>
        <div className={classes.taskCountText}>{taskCount} Tasks</div>
        <TaskFilters />
      </div>
      <TaskInput />
    </div>
  );
};
export default TaskHeader;
