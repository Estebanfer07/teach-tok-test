export interface QuestionI {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: Option[];
  user: User;
}

export interface Option {
  id: string;
  answer: string;
}

export interface User {
  name: string;
  avatar: string;
}
