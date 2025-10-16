import React, { useState } from "react";

function SubjectForm({ addSubject }) {
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !hours.trim()) return;

    addSubject({
      id: Date.now(),
      title,
      hours: Number(hours),
      done: false,
    });

    setTitle("");
    setHours("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Matéria / Tópico"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Horas de estudo"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default SubjectForm;
