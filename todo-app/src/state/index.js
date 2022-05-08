import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "buy milk", status: "Active" },
    { id: 2, name: "buy book", status: "Completed" },
  ],
  filterStatus: "Active",
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.items.push({
        id: nanoid(),
        name: action.payload.name,
        status: action.payload.status,
      });
      console.log(state.items);
    },
    deleteTask(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTaskStatus(state, action) {
      console.log(action);
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
    setStatusFilter(state, action) {
      state.filterStatus = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { tasks: taskSlice.reducer },
});
export const taskActions = taskSlice.actions;
export default store;
