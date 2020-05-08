import { combineReducers, createStore } from 'redux';
import { InterfaceState } from './states/InterfaceState';
import taskReducer from './reducers/TaskReducer';

// reducerで帰ってくる新しい値をstateに保存する。束ねて一元管理
// 本来はシングルトンオブジェクトだが、規模によっては複数に分けて管理したいから。
// 分けたreducerを束ねる
const combineReducer = combineReducers<InterfaceState>({
  taskList: taskReducer,
  // reducerが増えたら追加
});

// グローバルオブジェクトとしてstoreを作成
// Storeはdispatchされると、引数のActionと現在保持しているStateをreducerへ渡す
export const store = createStore(combineReducer);

export default store;
