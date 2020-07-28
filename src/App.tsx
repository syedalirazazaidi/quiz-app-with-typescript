import React, { useEffect, useState } from "react";
import { Questionear } from "./services/api";
import { Question, Quiz } from "./Types/quiz_types";
import { QuestionCard } from "./Components/QuestionCard";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export const App = () => {
  let [quiz, setQuiz] = useState<Question[]>([]);
  let [current, setCurrentState] = useState(0);
  let [score, setScore] = useState(0);
  let [showResult, setShowResult] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const results: Question[] = await Questionear();
      setQuiz(results);
    }
    fetchData();
  }, []);
  const reStart = () => {
    window.location.reload();
    setQuiz([]);
    setScore(0);
  };
  const answerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const answer = e.currentTarget.value;
    if (quiz[current].answer === answer) {
      setScore(score + 1);
    }
    if (current !== quiz.length - 1) setCurrentState(++current);
    else {
      setShowResult(true);
    }
  };
  if (showResult) {
    return (
      <div>
        <h3>
          your final score is :{score} out of {quiz.length}
        </h3>
        <button onClick={reStart}>Play again</button>
      </div>
    );
  }
  return quiz.length > 0 ? (
    <div className="container">
      <QuestionCard
        option={quiz[current].option}
        question={quiz[current].question}
        callback={answerSubmit}
      />
    </div>
  ) : (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={5000} //3 secs
    />
  );
};
