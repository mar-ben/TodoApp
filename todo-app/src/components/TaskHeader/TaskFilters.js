import { useDispatch, useSelector } from "react-redux";
import { taskActions } from "../../state";
import classes from "./TaskFilters.module.css";

const TaskFilters = (props) => {
  const filterStatus = useSelector((state) => state.tasks.filterStatus);
  const dispatch = useDispatch();
  const filters = ["All", "Active", "Completed"];
  const onClickTaskFilterButton = (event) => {
    dispatch(taskActions.setStatusFilter(event.target.innerText));
  };

  return (
    <div className={classes.taskfilters}>
      {filters.map((item) => (
        <button
          id={item}
          onClick={onClickTaskFilterButton}
          className={filterStatus === item ? classes.selected : ""}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default TaskFilters;
