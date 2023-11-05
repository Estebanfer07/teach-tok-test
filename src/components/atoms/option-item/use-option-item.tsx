import React from 'react';
import {Platform, StyleSheet} from 'react-native';

interface UseOptionItemProps {
  selectedAnswer: string;
  correctAnswer: string;
}

export const useOptionItem = ({
  selectedAnswer,
  correctAnswer,
}: UseOptionItemProps) => {
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
  };
  return {styles, getStyle};
};

const styles = StyleSheet.create({
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
