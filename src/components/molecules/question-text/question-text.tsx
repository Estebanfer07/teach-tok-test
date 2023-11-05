import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HighlightedText} from '../../atoms/highlighted-text/highlighted-text';

interface QuestionTextProps {
  question: string;
}

export const QuestionText: FC<QuestionTextProps> = ({question}) => {
  const highlight = () =>
    question
      .split(' ')
      .map((word, i) => <HighlightedText text={word} key={i} />);

  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.questionText}>{highlight()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionWrapper: {
    position: 'absolute',
    top: '25%',
    width: '70%',
  },
  questionText: {
    marginLeft: 10,
  },
});
