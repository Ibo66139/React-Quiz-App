import React, { useState, useEffect } from "react";

 const data = [
  { question: "Which programming language do you write like a recipe?", answer1: "Chef", answer2: "Gourmet", answer3: "Cake", correctAnswer: 0 },
  { question: "What is the youngest programming language?", answer1: "Java", answer2: "Swift", answer3: "AppleScript", correctAnswer: 1 },
  { question: "When was the JavaScript programming language introduced?", answer1: "1995", answer2: "2002", answer3: "1982", correctAnswer: 0 },
  { question: "What is the value of the unsigned binary number 11111110 in the decimal system?", answer1: "1", answer2: "127", answer3: "254", correctAnswer: 2 },
  { question: "What type of text do you learn first in most programming languages?", answer1: "Welcome", answer2: "New Website", answer3: "Hello World", correctAnswer: 2 },
  { question: "What is the purpose of the const keyword in JavaScript?", answer1: "variable", answer2: "constant", answer3: "function", correctAnswer: 1 },
  { question: "What method is used to add an element to the end of an array in JavaScript?", answer1: "push", answer2: "pop", answer3: "shift", correctAnswer: 0 },
  { question: "Which HTML tag is used to create a link?", answer1: "<a>", answer2: "<link>", answer3: "<href>", correctAnswer: 0 },
  { question: "What is the purpose of CSS", answer1: "Behave", answer2: "database", answer3: "layout", correctAnswer: 2 },
  { question: "What is a loop in programming?", answer1: "Funktion", answer2: "Repetition", answer3: "Data type", correctAnswer: 1 },
  { question: "What is a framework in programming?", answer1: "library", answer2: "Compiler", answer3: "Data type", correctAnswer: 0 },
  { question: "What is an API?", answer1: "interface", answer2: "database", answer3: "Compiler", correctAnswer: 0 },
  { question: "What is the purpose of Git?", answer1: "programming language", answer2: "Compile", answer3: "Version control", correctAnswer: 2 },
  { question: "What does HTML stand for?", answer1: "HyperText", answer2: "Hyperlinks", answer3: "HomeTool", correctAnswer: 0 },
  { question: "Which language is primarily used for web development?", answer1: "Python", answer2: "JavaScript", answer3: "Java", correctAnswer: 1 },
  { question: "What is the main purpose of a database?", answer1: "Styling", answer2: "Execution", answer3: "Storage", correctAnswer: 2 },
  { question: "Which keyword is used to define a function in Python?", answer1: "func", answer2: "def", answer3: "function", correctAnswer: 1 },
  { question: "What is the purpose of return in a function?", answer1: "Output", answer2: "Break", answer3: "Loop", correctAnswer: 0 },
];

// Funktion zum Mischen der Fragen
function mixArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const List = () => {
  const [mixedData, setMixedData] = useState([]);

  useEffect(() => {
    setMixedData(mixArray(data)); // Mische Fragen beim Laden der Komponente
  }, []);

  

  return (
    <main>
      <div className="Table-Con">
        <table>
          <thead>
            <tr>
              <th>Questions</th>
              <th>Answer1</th>
              <th>Answer2</th>
              <th>Answer3</th>
            </tr>
          </thead>
          <tbody>
            {mixedData.map((item, index) => (
              <tr key={index}>
                <td>{item.question}</td>
                <td>{item.answer1}</td>
                <td>{item.answer2}</td>
                <td>{item.answer3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export const shuffledData = mixArray(data);

export default List;
