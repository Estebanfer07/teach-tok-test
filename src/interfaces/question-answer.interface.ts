export interface QuestionAnswerI {
  id: number;
  correct_options: CorrectOption[];
}

export interface CorrectOption {
  id: string;
  answer: string;
}
