import React, {FC} from 'react';
import {Dimensions, Image, Text} from 'react-native';
import {API_BASE_URL} from '@env';

interface QuestionItemProps {
  img: string;
}

export const QuestionItem: FC<QuestionItemProps> = ({img: uri}) => {
  const {height} = Dimensions.get('window');
  return (
    // <Image
    //   source={{uri}}
    //   style={{
    //     height,
    //   }}
    // />
    <Text>{API_BASE_URL}</Text>
  );
};
