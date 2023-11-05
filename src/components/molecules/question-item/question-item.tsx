import React, {FC} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {QuestionI} from '../../../interfaces/question.interface';

interface QuestionItemProps {
  question: QuestionI;
}

export const QuestionItem: FC<QuestionItemProps> = ({
  question: {image: uri, question},
}) => {
  const {height} = Dimensions.get('window');

  const highlight = (string: string) =>
    string.split(' ').map((word, i) => (
      <View key={i}>
        <Text style={styles.highlighted}>{word}</Text>
      </View>
    ));
  return (
    <ImageBackground
      source={{uri}}
      style={{
        ...styles.image,
        height,
      }}>
      <View style={styles.imageCover}>
        <View style={styles.overlay}>
          {/* <Text style={styles.overlayText}>{question}</Text> */}
          <Text style={styles.textWrap}>
            {highlight(
              'Aside from slavery what was the most significant difference between the North and South during the mid-1800s?',
            )}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageCover: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '25%',
    width: '70%',
  },
  textWrap: {
    marginLeft: 10,
  },
  highlighted: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    fontSize: 25,
    paddingLeft: 4,
    paddingRight: 4,
    color: 'white',
  },
});
