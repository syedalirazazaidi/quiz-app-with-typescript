import React from "react";
export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type Question = {
  question: string;
  answer: string;
  option: string[];
};

export type PropType = {
  question: string;
  option: string[];
  // callback: (e: React.FormEvent<EventTarget>) => void;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
