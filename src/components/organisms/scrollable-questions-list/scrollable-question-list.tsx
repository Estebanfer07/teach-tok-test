import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import {QuestionItem} from '../../molecules/question-item/question-item';
import {QuestionI} from '../../../interfaces/question.interface';
import {getNextQuestion} from '../../../services/teach-tok-service/teach-tok-service';

export const ScrollabelQuestionList = () => {
  const [questions, setQuestions] = useState<QuestionI[]>([]);
  const [repeatedQuestionCount, setRepeatedQuestionCount] = useState(0);
  const questionPerPetition = 5;
  const maxRepeatedQuestions = 15;

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

  const {height} = Dimensions.get('window');

  const renderItem = ({item}: ListRenderItemInfo<QuestionI>) => {
    return <QuestionItem question={item} />;
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <FlatList
      data={questions}
      decelerationRate={'fast'}
      snapToInterval={height}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      onEndReached={loadMore}
      onEndReachedThreshold={0}
      ListFooterComponent={() => (
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
      )}
    />
  );
};
