"use client";
import React, { useState } from "react";

const Insertdemo = () => {
  const [studentName, setStudentName] = useState("");
  const [marks, setMarks] = useState({
    sub1: "Tamil",
    sub2: "English",
    sub3: "Mathematics",
    sub4: "Science",
    sub5: "Social",
  });

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.values(marks).map(Number);
    const total = values.reduce((a, b) => a + b, 0);
    const average = total / 5;
    const percentage = (total / 500) * 100;

    const examObj = {
      studentName,
      ...marks,
      total,
      average,
      percentage,
    };

    fetch("http://localhost:8000/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(examObj),
    }).then(() => {
      alert("Exam details saved");
      setStudentName("");
      setMarks({ sub1: "", sub2: "", sub3: "", sub4: "", sub5: "" });
    });
  };

  return (
    <div>
      <h2>Insert Exam Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        {["sub1", "sub2", "sub3", "sub4", "sub5"].map((sub, i) => (
          <input
            key={sub}
            type="number"
            name={sub}
            placeholder={`Subject ${i + 1}`}
            value={marks[sub]}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Insertdemo;

