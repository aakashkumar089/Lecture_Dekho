import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from '../../utils';
import NavigateBack from '../NavigateBack.js/NavigateBack';

const HeaderText = ({text}) => {
  return (
    <View style={styles.container}>
      {/* <NavigateBack style={styles.navigateBack} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navigateBack: {},
  HeaderText: {
    color: color?.black,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HeaderText;
