import React from "react";
import { Task } from "./components/Types";

type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handoleDelete: (task: Task) => void;
};

const TaskItem: React.FC<Props> = ({ task, handleDone, handoleDelete }) => {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input type="checkbox" className="checkbox-inpu" onClick={() => handleDone(task)} defaultChecked={task.done} />
        <span className="checkbox-label">{task.title} </span>
      </label>
      <button onClick={() => handoleDelete(task)} className="btn is-delete">
        削除
      </button>
    </li>
  );
};

export default TaskItem;
