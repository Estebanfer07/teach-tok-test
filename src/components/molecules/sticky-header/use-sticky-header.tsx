import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

export const useStickyHeader = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 60000);
  }, []);

  return {styles, time};
};

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: '6%',
    zIndex: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  timeText: {
    color: 'rgba(255, 255, 255, 0.60)',
    fontSize: 14,
  },
  titleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'white',
  },
  titleMark: {width: '60%', backgroundColor: 'white', height: 4},
});
