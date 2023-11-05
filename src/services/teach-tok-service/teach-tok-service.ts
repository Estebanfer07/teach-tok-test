import {QuestionAnswerI} from '../../interfaces/question-answer.interface';
import {QuestionI} from '../../interfaces/question.interface';
import {teachTokService} from './teach-tok-service-config';

export const getNextQuestion = () =>
  teachTokService
    .get<QuestionI>('/for_you')
    .then(({data}) => data)
    .catch(() => {
      console.log('There was a problem getting a new question');
    });

export const verifyAnswer = (id: number) =>
  teachTokService
    .get<QuestionAnswerI>(`/reveal?id=${id}`)
    .then(({data}) => data)
    .catch(() => {
      console.log('There was a problem getting a the answer');
    });
