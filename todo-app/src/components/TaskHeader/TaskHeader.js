import { useState } from "react";
import { useSelector } from "react-redux";
import TaskFilters from "./TaskFilters";
import classes from "./TaskHeader.module.css";
import TaskInput from "./TaskInput";
const TaskHeader = (props) => {
  const today = new Date();
  const formatedDate = today.toDateString();
  const items = useSelector((state) => state.tasks.items);
  console.log(items);
  const taskCount = items.length;

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
