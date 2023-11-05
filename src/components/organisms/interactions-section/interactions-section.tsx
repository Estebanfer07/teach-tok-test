import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {CircleAvatar} from '../../molecules/circle-avatar/circle-avatar';
import {InteractionItem} from '../../molecules/interaction-item/interaction-item';

interface InteractionsSectionProps {
  avatarUri: string;
}

export const InteractionsSection: FC<InteractionsSectionProps> = ({
  avatarUri: uri,
}) => {
  return (
    <View style={styles.interactionSection}>
      <CircleAvatar uri={uri} />
      <InteractionItem icon="heart" interactionCount={87} />
      <InteractionItem icon="chatbubble-ellipses" interactionCount={2} />
      <InteractionItem icon="bookmark" interactionCount={203} />
      <InteractionItem icon="arrow-redo" interactionCount={17} />
    </View>
  );
};

const styles = StyleSheet.create({
  interactionSection: {
    position: 'absolute',
    right: 10,
    bottom: '14.5%',
  },
});
