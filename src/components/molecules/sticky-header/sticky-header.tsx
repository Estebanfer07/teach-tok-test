import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useStickyHeader} from './use-sticky-header';

export const StickyHeader = () => {
  const {styles, time} = useStickyHeader();

  return (
    <View style={styles.headerWrapper}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="stopwatch" color={'rgba(255, 255, 255, 0.60)'} size={20} />
        <Text style={styles.timeText}>{time}m</Text>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>For You</Text>
        <View style={styles.titleMark}></View>
      </View>
      <Icon name="search" color={'white'} size={20} />
    </View>
  );
};
