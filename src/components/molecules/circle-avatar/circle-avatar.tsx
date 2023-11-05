import React, {FC} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CircleAvatarProps {
  uri: string;
}

export const CircleAvatar: FC<CircleAvatarProps> = ({uri}) => {
  return (
    <View style={styles.circleAvatar}>
      <View style={styles.avatarFollow}>
        <Icon name="add" color={'white'} size={20} />
      </View>
      <Image testID="avatar-image" source={{uri}} style={styles.avatarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
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
