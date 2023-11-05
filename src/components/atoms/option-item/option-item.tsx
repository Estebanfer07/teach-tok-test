import React, {FC, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useOptionItem} from './use-option-item';

interface OptionItemProps {
  currentAnswer: string;
  answer: string;
  correctAnswer: string;
  selectedAnswer: string;
  setSelectedAnswer(id: string): void;
}

export const OptionItem: FC<OptionItemProps> = ({
  currentAnswer,
  answer,
  correctAnswer,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const {styles, getStyle} = useOptionItem({correctAnswer, selectedAnswer});

  return (
    <TouchableOpacity
      testID="option-item"
      style={{...styles.optionBox, ...getStyle(currentAnswer)}}
      key={currentAnswer}
      onPress={() => setSelectedAnswer(currentAnswer)}>
      <Text style={styles.optionText}>{answer}</Text>
    </TouchableOpacity>
  );
};
