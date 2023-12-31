import React, {useEffect, useState} from 'react';
import {verifyAnswer} from '../../../services/teach-tok-service/teach-tok-service';

interface UseOptionListProps {
  questionId: number;
}

export const useOptionlist = ({questionId}: UseOptionListProps) => {
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    getAnswer();
  }, []);

  const getAnswer = async () => {
    const answer = await verifyAnswer(questionId);
    if (answer) {
      const {correct_options} = answer;
      setCorrectAnswer(correct_options[0].id);
    }
  };

  return {correctAnswer, selectedAnswer, setSelectedAnswer};
};
