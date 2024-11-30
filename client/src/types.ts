// types.ts
import { OrderedSet } from "immutable";

export interface Score {
  id: number;
  value: number;
  rank: number;        // rankプロパティを必須に変更
  name: string;        // nameプロパティを必須に変更
  correctNum: number;  // correctNumプロパティを必須に変更
  time: number;        // timeプロパティを必須に変更
}

export interface ConsoleState {
  showedQuizs: OrderedSet<number>;
  showedAnswers: OrderedSet<number>;
  ranking: Score[];
  questions: OrderedSet<number>;
}

export interface DispatchActions {
  dispatch: () => void;
  loadQuestions: () => void;
  showQuiz: () => void;
  showAnswer: () => void;
  rankList: () => void;
  fetchMostClicker: () => void;
}
