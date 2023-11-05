import {QuestionAnswerI} from '../../interfaces/question-answer.interface';
import {QuestionI} from '../../interfaces/question.interface';
import {teachTokService} from './teach-tok-service-config';

export const getNextQuestion = () =>
  teachTokService.get<QuestionI>('/for_you').then(({data}) => data);

export const verifyAnswer = (id: number) =>
  teachTokService
    .get<QuestionAnswerI>(`/reveal?id=${id}`)
    .then(({data}) => data);
