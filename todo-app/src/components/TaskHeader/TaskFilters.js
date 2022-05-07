import classes from "./TaskFilters.module.css";
const TaskFilters = (props) => {
  return (
    <div className={classes.taskfilters}>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};
export default TaskFilters;
