import React from "react";
import ProgressBar from "./ProgressBar";

function SubjectList({ subjects, toggleDone, removeSubject }) {
  if (subjects.length === 0) {
    return <p className="empty">Nenhuma matéria adicionada ainda 😅</p>;
  }

  const completed = subjects.filter((s) => s.done).length;
  const progress = (completed / subjects.length) * 100;

  return (
    <div className="list">
      <ProgressBar value={progress} />
      {subjects.map((subject) => (
        <div key={subject.id} className={`item ${subject.done ? "done" : ""}`}>
          <div>
            <strong>{subject.title}</strong> — {subject.hours}h
          </div>
          <div className="buttons">
            <button onClick={() => toggleDone(subject.id)}>
              {subject.done ? "Desmarcar" : "Concluir"}
            </button>
            <button className="remove" onClick={() => removeSubject(subject.id)}>
              Remover
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubjectList;
