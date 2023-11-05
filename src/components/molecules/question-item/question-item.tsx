import React, {FC} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import {QuestionI} from '../../../interfaces/question.interface';

interface QuestionItemProps {
  question: QuestionI;
}

export const QuestionItem: FC<QuestionItemProps> = ({
  question: {image: uri, question, options},
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
          <Text style={styles.textWrap}>{highlight(question)}</Text>
        </View>
        <View style={styles.optionsWrapper}>
          {options.map(({id, answer}) => (
            <View style={styles.optionBox}>
              <Text style={styles.optionText} key={id}>
                {answer}
              </Text>
            </View>
          ))}
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
  optionsWrapper: {
    position: 'absolute',
    top: '45%',
    width: '85%',
  },
  optionBox: {
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.7,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 8,
    padding: 16,
  },
  optionText: {
    fontSize: 20,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
