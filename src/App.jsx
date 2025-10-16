import React, { useState, useEffect } from "react";
import SubjectForm from "./components/SubjectForm";
import SubjectList from "./components/SubjectList";

function App() {
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem("studysync_subjects");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("studysync_subjects", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const toggleDone = (id) => {
    setSubjects(
      subjects.map((s) =>
        s.id === id ? { ...s, done: !s.done } : s
      )
    );
  };

  const removeSubject = (id) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  return (
    <div className="container">
      <h1>📚 StudySync</h1>
      <p className="subtitle">Gerencie seus estudos e acompanhe seu progresso!</p>
      <SubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} toggleDone={toggleDone} removeSubject={removeSubject} />
    </div>
  );
}

export default App;
