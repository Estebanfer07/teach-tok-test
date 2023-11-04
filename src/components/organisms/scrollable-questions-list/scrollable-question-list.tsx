import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  View,
  useColorScheme,
} from 'react-native';
import {QuestionItem} from '../../molecules/question-item/question-item';

export const ScrollabelQuestionList = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    console.log('loading more');
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const {height} = Dimensions.get('window');

  const renderItem = ({item}: ListRenderItemInfo<number>) => {
    return <QuestionItem img={`https://picsum.photos/id/${item}/500/400`} />;
  };
  return (
    <FlatList
      data={numbers}
      decelerationRate={'fast'}
      snapToInterval={height}
      keyExtractor={item => item.toString()} //TODO: KEY MUST BE ID
      renderItem={renderItem}
      onEndReached={loadMore}
      onEndReachedThreshold={1}
      ListFooterComponent={() => (
        <View
          style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={25} />
        </View>
      )}
    />
  );
};
