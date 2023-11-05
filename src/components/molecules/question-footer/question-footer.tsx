import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface QuestionFooterProps {
  description: string;
  playlist: string;
  user: string;
}

export const QuestionFooter: FC<QuestionFooterProps> = ({
  description,
  playlist,
  user,
}) => {
  return (
    <View style={styles.descriptionWrapper}>
      <Text style={styles.user}>{user}</Text>
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
  );
};

const styles = StyleSheet.create({
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
});
