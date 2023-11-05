import React, {FC} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

interface ListFooterProps {
  repeatedQuestionCount: number;
  maxRepeatedQuestions: number;
}

export const ListFooter: FC<ListFooterProps> = ({
  repeatedQuestionCount,
  maxRepeatedQuestions,
}) => {
  return (
    <View
      style={{
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {repeatedQuestionCount < maxRepeatedQuestions && (
        <ActivityIndicator size={25} />
      )}
      {repeatedQuestionCount >= maxRepeatedQuestions && (
        <Text>There are no more questions</Text>
      )}
    </View>
  );
};
