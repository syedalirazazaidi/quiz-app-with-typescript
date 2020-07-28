import { Quiz, Question } from "../Types/quiz_types";
const shuffleArray = (array: any[]) => [
  ...array.sort(() => Math.random() - 0.5),
];
export const Questionear = async (): Promise<Question[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`
  );
  let { results } = await res.json();
  const quiz: Question[] = results.map((queObj: Quiz) => {
    return {
      question: queObj.question,
      answer: queObj.correct_answer,
      option: shuffleArray(
        queObj.incorrect_answers.concat(queObj.correct_answer)
      ),
    };
  });
  return quiz;
};
