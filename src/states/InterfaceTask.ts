/**
 * タスク
 */
export interface InterfaceTask {
  /** 完了フラグ */
  complete: boolean;
  /** 期限 */
  deadline: Date;
  /** タスクを一意に判断するID (UUID) */
  id: string;
  /** タスクの名前 */
  taskName: string;
}
/**
 * タスクのリスト
 */
export interface InterfaceTaskList {
  /** タスクの一覧 */
  tasks: InterfaceTask[];
}
