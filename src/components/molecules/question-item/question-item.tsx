import React, {FC} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  Image,
} from 'react-native';
import {QuestionI} from '../../../interfaces/question.interface';
import Icon from 'react-native-vector-icons/Ionicons';

interface QuestionItemProps {
  question: QuestionI;
}

export const QuestionItem: FC<QuestionItemProps> = ({
  question: {image: uri, question, options, description, user, playlist},
}) => {
  console.log('=============QUESTION================');
  console.log(question);
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
        <View style={styles.interactionSection}>
          <View style={styles.circleAvatar}>
            <View style={styles.avatarFollow}>
              <Icon name="add" color={'white'} size={20} />
            </View>
            <Image source={{uri: user.avatar}} style={styles.avatarImage} />
          </View>
          <View style={styles.interactionItem}>
            <Icon name="heart" color={'white'} size={30} />
            <Text style={styles.interactionText}>87</Text>
          </View>
          <View style={styles.interactionItem}>
            <Icon name="chatbubble-ellipses" color={'white'} size={30} />
            <Text style={styles.interactionText}>2</Text>
          </View>
          <View style={styles.interactionItem}>
            <Icon name="bookmark" color={'white'} size={30} />
            <Text style={styles.interactionText}>203</Text>
          </View>
          <View style={styles.interactionItem}>
            <Icon name="arrow-redo" color={'white'} size={30} />
            <Text style={styles.interactionText}>17</Text>
          </View>
        </View>
        <View style={styles.overlay}>
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
        <View style={styles.descriptionWrapper}>
          <Text style={styles.user}>{user.name}</Text>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.description}>{description.split('#')[0]}</Text>
            <Text style={{...styles.description, fontWeight: 'bold'}}>
              #{description.split('#')[1]}
            </Text>
          </View>
          <View style={styles.playlistWrapper}>
            <Icon name="film" color={'white'} size={22} />
            <Text style={styles.playlistText}>{playlist}</Text>
            <View style={styles.spacer}></View>
            <Icon name="chevron-forward" color={'white'} size={22} />
          </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    margin: 8,
    padding: 16,
  },
  optionText: {
    fontSize: 18,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  descriptionWrapper: {
    position: 'absolute',
    bottom: '10%',
    paddingLeft: 10,
    paddingRight: 15,
    width: '100%',
  },
  descriptionTextWrapper: {
    flexDirection: 'row',
  },
  user: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 15,
  },
  description: {
    color: 'white',
    fontSize: 13,
    marginBottom: 10,
  },
  playlistWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  playlistText: {
    color: 'white',
    marginHorizontal: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1,
  },
  interactionSection: {
    position: 'absolute',
    right: 10,
    bottom: '14.5%',
  },
  interactionItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 8,
  },
  interactionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  circleAvatar: {
    height: 45,
    width: 45,
    borderRadius: 22,
    backgroundColor: 'red',
    marginVertical: 8,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarFollow: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#28B18F',
    bottom: -12,
    left: 12,
  },
});
