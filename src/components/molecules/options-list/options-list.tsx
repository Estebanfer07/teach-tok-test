import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Option} from '../../../interfaces/question.interface';
import {OptionItem} from '../../atoms/option-item/option-item';
import {useOptionlist} from './use-option-list';

interface OptionsListProps {
  options: Option[];
  questionId: number;
}

export const OptionsList: FC<OptionsListProps> = ({options, questionId}) => {
  const {correctAnswer, selectedAnswer, setSelectedAnswer} = useOptionlist({
    questionId,
  });

  return (
    <View style={styles.optionsWrapper}>
      {options.map(({id, answer}) => (
        <OptionItem
          key={id}
          currentAnswer={id}
          answer={answer}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsWrapper: {
    position: 'absolute',
    bottom: '22%',
    width: '85%',
  },
});
