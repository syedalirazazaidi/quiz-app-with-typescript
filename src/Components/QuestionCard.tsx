import React from "react";
import { PropType } from "../Types/quiz_types";
export const QuestionCard: React.FC<PropType> = ({
  question,
  option,
  callback,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-center m-16 text-4xl text-red-600 font-mono">
          Quiz-App
        </h1>
        <div className="bg-white text-purple-800 p-10 rounded shadow-md">
          <h2
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* <form className="grid grid-cols-2 gap-6 mt-6" onSubmit={callback}> */}
          {option.map((answers: string, i: number) => (
            <button
              key={i}
              className="bg-white  p-4 text-purple-800 font-semibold rounded shadow"
              value={answers}
              onClick={callback}
              dangerouslySetInnerHTML={{ __html: answers }}
            >
              {/* {answers} */}
            </button>
          ))}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};
