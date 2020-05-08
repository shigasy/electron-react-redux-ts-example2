import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { InterfaceTaskList } from '../states/InterfaceTask';
import {
  showTaskListAction,
  addTaskAction,
  toggleCompleteAction,
  deleteTaskAction,
} from '../actions/TaskActions';

const initState: InterfaceTaskList = {
  tasks: [],
};

const taskReducer = reducerWithInitialState<InterfaceTaskList>(initState)
  .case(showTaskListAction, (state, payload) => ({ ...state, tasks: payload }))
  .case(addTaskAction, (state, payload) => {
    const taskList = [...state.tasks, payload];
    return { ...state, tasks: taskList };
  })
  .case(toggleCompleteAction, (state, payload) => {
    const taskList = [...state.tasks]; // 新しい配列生成
    const toggleCompleteTaskList = taskList.map((t) =>
      t.id === payload
        ? {
            ...t,
            complete: !t.complete,
          }
        : t
    );
    return { ...state, tasks: toggleCompleteTaskList };
    // find version
    // オブジェクトの値を変更していたから気になった
    // const task = taskList.find((t) => t.id === payload ? !t.complete:);
    // if (!task) {
    //   return state;
    // }
    // task.complete = !task.complete;
    // return { ...state, tasks: taskList };
  })
  .case(deleteTaskAction, (state, payload) => {
    const taskList = state.tasks.filter((task) => task.id !== payload);
    return { ...state, tasks: taskList };
  })
  .build();

export default taskReducer;
