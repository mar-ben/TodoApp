import logo from "./logo.svg";
import "./App.css";
import Box from "./components/UI/Box";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <Box>
      <TaskHeader />
      <TaskList />
    </Box>
  );
}

export default App;
