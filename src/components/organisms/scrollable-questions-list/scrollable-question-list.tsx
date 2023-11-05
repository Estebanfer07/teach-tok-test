import React, {FC, useEffect, useState} from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';

export const ScrollabelQuestionList = () => {
  const [questions, setQuestions] = useState<QuestionI[]>([]);
  const [repeatedQuestionCount, setRepeatedQuestionCount] = useState(0);
  const questionPerPetition = 5;
  const maxRepeatedQuestions = 15;
  const [time, setTime] = useState(0);

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

  const {height, width} = Dimensions.get('window');

  const renderItem = ({item}: ListRenderItemInfo<QuestionI>) => {
    return <QuestionItem question={item} />;
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 60000);
  }, []);

  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: '6%',
          zIndex: 10,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="stopwatch"
            color={'rgba(255, 255, 255, 0.60)'}
            size={20}
          />
          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.60)',
              fontSize: 14,
            }}>
            {time}m
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              borderBottomColor: 'white',
            }}>
            For You
          </Text>
          <View
            style={{width: '60%', backgroundColor: 'white', height: 4}}></View>
        </View>
        <Icon name="search" color={'white'} size={20} />
      </View>
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
    </View>
  );
};
