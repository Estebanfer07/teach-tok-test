import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {QuestionI} from '../../../interfaces/question.interface';
import {getNextQuestion} from '../../../services/teach-tok-service/teach-tok-service';

export const useScrollableQuestionList = () => {
  const questionPerPetition = 5;
  const maxRepeatedQuestions = 15;
  const {height} = Dimensions.get('window');

  const [questions, setQuestions] = useState<QuestionI[]>([]);
  const [repeatedQuestionCount, setRepeatedQuestionCount] = useState(0);

  useEffect(() => {
    loadMore();
  }, []);

  const filterRepeatedQuestions = (newQuestion: QuestionI) => {
    setQuestions(prevQuestions => {
      const ids = prevQuestions.map(({id}) => id);

      if (!ids.includes(newQuestion.id)) {
        setRepeatedQuestionCount(0);
        return [...prevQuestions, newQuestion];
      }
      setRepeatedQuestionCount(prevCount => prevCount + 1);
      return prevQuestions;
    });
  };

  const loadMore = async () => {
    if (repeatedQuestionCount >= maxRepeatedQuestions) return;
    for (let index = 0; index < questionPerPetition; index++) {
      const newQuestion = await getNextQuestion();
      filterRepeatedQuestions(newQuestion);
    }
  };

  return {
    height,
    questions,
    loadMore,
    repeatedQuestionCount,
    maxRepeatedQuestions,
  };
};
