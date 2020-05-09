import React, { useMemo, useCallback, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { styled } from './FoundationStyles';
import { InterfaceTask } from '../states/InterfaceTask';
import { toggleCompleteAction, deleteTaskAction } from '../actions/TaskActions';

// #region styled
/**
 * 行の大外枠...(1)
 */
const Task = styled.div<{ expiration: boolean }>`
  align-items: center;
  background-color: ${(p): string =>
    p.expiration ? 'inherit' : p.theme.SECONDARY_2_0};
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  padding: 10px;
  transition-duration: 0.2s;
  transition-property: all;
  /* (2) */
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 5px rgba(200, 200, 200, 4);
  }
`;
/**
 * タスク完了のチェックアイコン表示 枠
 */
const TaskCheckBox = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  height: 2em;
  width: 2em;
`;
/**
 * タスク完了チェックアイコン
 */
const TaskCheck = styled.p`
  color: ${(p): string => p.theme.SECONDARY_1_3};
  font-size: 150%;
`;
/**
 * タスク名と期日の表示 枠
 */
const TaskBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  height: 3em;
  justify-content: space-around;
`;
/**
 * タスク削除アイコン
 */
const TaskRemove = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
`;
/**
 * タスク名
 */
const TaskName = styled.div`
  font-size: 120%;
`;

/**
 * 期日
 */
const Deadline = styled.div``;

const TaskRow: React.FC<{ data: InterfaceTask }> = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const expiration = useMemo(() => {
    return new Date() < data.deadline || data.complete;
  }, [data.deadline, data.complete]);

  const deadlineString = useMemo(() => {
    return moment(data.deadline).format('YYYY-MM-DD HH:mm');
  }, [data.deadline]);

  const onRowClick = useCallback(() => {
    dispatch(toggleCompleteAction(data.id));
  }, [data.id]);

  const onDeleteClick = useCallback(
    (e: SyntheticEvent) => {
      dispatch(deleteTaskAction(data.id));
      e.stopPropagation();
    },
    [data.id]
  );

  return (
    <Task expiration={expiration} onClick={onRowClick}>
      <TaskCheckBox>
        <TaskCheck>{data.complete ? '✅' : null}</TaskCheck>
      </TaskCheckBox>
      <TaskBody>
        <TaskName>{data.taskName}</TaskName>
        <Deadline>
          <span role="img" aria-label="期限">
            ⏰{deadlineString}
          </span>
        </Deadline>
      </TaskBody>
      <TaskRemove onClick={onDeleteClick}>
        <span role="img" aria-label="閉じる">
          ❌
        </span>
      </TaskRemove>
    </Task>
  );
};

export default TaskRow;
