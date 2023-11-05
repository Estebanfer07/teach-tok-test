import React, {FC} from 'react';
import {Dimensions, View, StyleSheet, ImageBackground} from 'react-native';
import {QuestionI} from '../../../interfaces/question.interface';

import {InteractionsSection} from '../interactions-section/interactions-section';
import {OptionsList} from '../../molecules/options-list/options-list';
import {QuestionFooter} from '../../molecules/question-footer/question-footer';
import {QuestionText} from '../../molecules/question-text/question-text';

interface QuestionItemProps {
  question: QuestionI;
}

export const QuestionItem: FC<QuestionItemProps> = ({
  question: {image: uri, question, options, description, user, playlist, id},
}) => {
  const {height} = Dimensions.get('window');

  return (
    <ImageBackground
      source={{uri}}
      style={{
        ...styles.image,
        height,
      }}>
      <View style={styles.imageCover}>
        <InteractionsSection avatarUri={user.avatar} />
        <QuestionText question={question} />
        <OptionsList options={options} questionId={id} />
        <QuestionFooter
          description={description}
          playlist={playlist}
          user={user.name}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
  imageCover: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
