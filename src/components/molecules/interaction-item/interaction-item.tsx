import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface InteractionItemProps {
  interactionCount: number;
  icon: string;
}

export const InteractionItem: FC<InteractionItemProps> = ({
  interactionCount,
  icon,
}) => {
  return (
    <View style={styles.interactionItem}>
      <Icon name={icon} color={'white'} size={30} />
      <Text style={styles.interactionText}>{interactionCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
