import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface QuestionTextProps {
  question: string;
}

export const QuestionText: FC<QuestionTextProps> = ({question}) => {
  const highlight = () =>
    question.split(' ').map((word, i) => (
      <View key={i}>
        <Text style={styles.highlighted}>{word}</Text>
      </View>
    ));

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
  highlighted: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontSize: 25,
    paddingLeft: 4,
    paddingRight: 4,
    color: 'white',
  },
});
