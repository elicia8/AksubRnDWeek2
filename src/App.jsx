import './App.css'
import Level from './Level'
import Question from './Question'
import Header from './Header';
import Answer from './Answer';
import FlashCard from './FlashCard';
import { useState } from 'react';

function App() {
  const data = [
    {
      num: 1,
      question: "What does a useEffect dependency array do?",
      answer: "Re-runs the useEffect function whenever any dependency changes.",
      difficulty: "Easy",
    },
    {
      num: 2,
      question: "List all of React's Component Lifecycles!",
      answer:
        "A React Component has three lifecycle phases: mounting, updating and unmounting.",
      difficulty: "Medium",
    },
    {
      num: 3,
      question: "What is a Higher Order Component?",
      answer:
        "A function that takes a component and returns an enhanced component version.",
      difficulty: "Hard",
    },
    {
      num: 4,
      question: "What is The Compound Component Pattern?",
      answer:
        "A pattern enabling related components to share state implicitly, promoting flexible design.",
      difficulty: "Hard",
    },
    {
      num: 5,
      question: "What is prop drilling and how to fix it?",
      answer:
        "Prop drilling refers to passing props through several layers; the Context API can streamline this.",
      difficulty: "Easy",
    },
    {
      num: 6,
      question: "What is the usage of the useRef hook?",
      answer:
        "It maintains a mutable value between renders without causing re-renders, useful for DOM refs.",
      difficulty: "Medium",
    },
  ];
  return (
    <div className='container'>
      <Header />
      <div className="cards-container">
        {data.map((obj) => (
          <FlashCard num={obj.num} question={obj.question} answer={obj.answer} difficulty={obj.difficulty} key={obj.num} />
        ))}
      </div>
    </div>
  )
}

export default App
