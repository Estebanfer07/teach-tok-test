import React from 'react';
import {FlatList, View} from 'react-native';
import {QuestionItem} from '../question-item/question-item';
import {StickyHeader} from '../../molecules/sticky-header/sticky-header';
import {ListFooter} from '../../molecules/list-footer/list-footer';
import {useScrollableQuestionList} from './use-scrollable-question-list';

export const ScrollabelQuestionList = () => {
  const {
    height,
    questions,
    repeatedQuestionCount,
    maxRepeatedQuestions,
    loadMore,
  } = useScrollableQuestionList();

  return (
    <View>
      <StickyHeader />
      <FlatList
        data={questions}
        decelerationRate={'fast'}
        snapToInterval={height}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <QuestionItem question={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        ListFooterComponent={() => (
          <ListFooter
            repeatedQuestionCount={repeatedQuestionCount}
            maxRepeatedQuestions={maxRepeatedQuestions}
          />
        )}
      />
    </View>
  );
};
