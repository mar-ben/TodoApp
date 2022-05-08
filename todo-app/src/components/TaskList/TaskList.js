import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

import { useSelector } from "react-redux";
const TaskList = (props) => {
  const tasks = useSelector((state) => state.tasks.items);
  const filterStatus = useSelector((state) => state.tasks.filterStatus);

  const filteredTasks =
    filterStatus !== "All"
      ? tasks.filter((item) => item.status === filterStatus)
      : tasks;

  console.log(tasks);
  const taskItems = filteredTasks.map((item) => (
    <TaskItem
      key={item.id}
      name={item.name}
      id={item.id}
      status={item.status}
    ></TaskItem>
  ));
  return (
    <div className={classes.container}>
      <div className={classes.tasklist}>{taskItems}</div>
    </div>
  );
};
export default TaskList;
