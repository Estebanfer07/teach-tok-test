import {QuestionI} from '../../interfaces/question.interface';
import {teachTokService} from './teach-tok-service-config';

export const getNextQuestion = () =>
  teachTokService.get<QuestionI>('/for_you').then(({data}) => data);
