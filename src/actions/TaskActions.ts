import { actionCreatorFactory } from 'typescript-fsa';
import moment from 'moment';
import { Dispatch } from 'redux';
import { InterfaceTask } from '../states/InterfaceTask';

const actionCreator = actionCreatorFactory('task-actions');

/**
 * タスクの一覧を表示する
 * 引数は、タスクオブジェクトの配列
 */
export const showTaskListAction = actionCreator<InterfaceTask[]>(
  'show-task-list'
);

/**
 * タスクを追加する
 * 引数は、追加するタスクオブジェクト
 */
export const addTaskAction = actionCreator<InterfaceTask>('add');

/**
 * タスクの完了フラグをトグルする
 * 引数は、タスクID
 */
export const toggleCompleteAction = actionCreator<string>('toggle-complete');

/**
 * タスクを削除する
 * 引数は、タスクID
 */
export const deleteTaskAction = actionCreator<string>('delete');

const dummyTasks: InterfaceTask[] = [
  {
    complete: false,
    deadline: moment().add(1, 'day').toDate(),
    id: '0',
    taskName: 'task01',
  },
  {
    complete: true,
    deadline: moment().add(1, 'day').toDate(),
    id: '1',
    taskName: 'task02',
  },
  {
    complete: false,
    deadline: moment().add(-1, 'day').toDate(),
    id: '2',
    taskName: 'task03',
  },
  {
    complete: true,
    deadline: moment().add(-1, 'day').toDate(),
    id: '3',
    taskName: 'task04',
  },
];

export const getTaskList = (dispatch: Dispatch): void => {
  dispatch(showTaskListAction(dummyTasks));
};
