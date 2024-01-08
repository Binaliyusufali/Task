import React from "react";

function TaskListItem({ item, editTask, removeTask, doneTask }) {
  return (
    <>
      <li
        className={`list-group-item ${item.isDone && 'bg-success bg-gradient text-light'}`}
        key={item.uuid}
      >
        {item.priority && (
          <span className="badge text-bg-secondary  me-3">Öncelikli</span>
        )}
        {item.task}
        {/* float-end ile en sonra götürme işlemi yapmış oluyoruz. */}
        <div className="btn-group float-end" role="group">
          <button
            onClick={() => doneTask(item.uuid)}
            className="btn btn-sm btn-success float-end"
          >
            Tamamlandı
          </button>
          <button
            onClick={() => editTask(item.uuid)}
            className="btn btn-sm btn-warning float-end"
          >
            Güncelle
          </button>
          <button
            onClick={() => removeTask(item.uuid)}
            className="btn btn-sm btn-danger float-end"
          >
            Sil
          </button>
        </div>
      </li>
    </>
  );
}

export default TaskListItem;
