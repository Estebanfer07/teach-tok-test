import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HighlightedTextProps {
  text: string;
}

export const HighlightedText: FC<HighlightedTextProps> = ({text}) => {
  return (
    <View>
      <Text style={styles.highlighted}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  highlighted: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    fontSize: 25,
    paddingLeft: 4,
    paddingRight: 4,
    color: 'white',
  },
});
