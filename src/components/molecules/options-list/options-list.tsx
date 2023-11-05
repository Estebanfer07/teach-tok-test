import React, {FC, useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {Option} from '../../../interfaces/question.interface';
import {verifyAnswer} from '../../../services/teach-tok-service/teach-tok-service';

interface OptionsListProps {
  options: Option[];
  questionId: number;
}

export const OptionsList: FC<OptionsListProps> = ({options, questionId}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    getAnswer();
  }, []);

  const getAnswer = async () => {
    const {correct_options} = await verifyAnswer(questionId);
    setCorrectAnswer(correct_options[0].id);
  };
  const getStyle = (currentOption: string) => {
    if (selectedAnswer !== '' && currentOption === correctAnswer) {
      return {backgroundColor: 'green'};
    }
    if (
      selectedAnswer !== '' &&
      selectedAnswer !== correctAnswer &&
      currentOption === selectedAnswer
    ) {
      return {backgroundColor: 'red'};
    }

    return {};
  };
  return (
    <View style={styles.optionsWrapper}>
      {options.map(({id, answer}) => (
        <TouchableOpacity
          style={{...styles.optionBox, ...getStyle(id)}}
          key={id}
          onPress={() => setSelectedAnswer(id)}>
          <Text style={styles.optionText}>{answer}</Text>
        </TouchableOpacity>
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
  optionBox: {
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.7,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginVertical: 4,
    marginHorizontal: 10,
    padding: 16,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
