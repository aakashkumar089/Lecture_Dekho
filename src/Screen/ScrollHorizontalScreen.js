import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import NavigateBack from '../component/NavigateBack.js/NavigateBack';

const names = [
  {key: '1', subName: 'Science'},
  {key: '2', subName: 'Mathematics'},
  {key: '3', subName: 'English'},
  {key: '4', subName: 'Social Science'},
  {key: '5', subName: 'Hindi'},
  {key: '6', subName: 'Sanskrit'},
];
const ScrollHorizontalScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <NavigateBack title="Select Chapters and Topics" />

        <FlatList
          data={names}
          horizontal
          style={styles.scrollHorizontal}
          renderItem={({item}) => {
            return <Text style={styles.textFont}>{item.subName}</Text>;
          }}
        />
        {/* <ScrollView horizontal={true} style={styles.scrollHorizontal}>
          <Text style={styles.textFont}>Science</Text>
          <Text style={styles.textFont}>Mathematics</Text>
          <Text style={styles.textFont}>English</Text>
          <Text style={styles.textFont}>Social Science</Text>
          <Text style={styles.textFont}>Hindi</Text>
          <Text style={styles.textFont}>Sanskrit</Text>
        </ScrollView> */}
        <View style={styles.lineStyle} />
      </View>
    </SafeAreaView>
  );
};

export default ScrollHorizontalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollHorizontal: {
    margin: 12,
    marginTop: '10%',
    paddingVertical: 1,
    paddingHorizontal: 7,
  },

  textFont: {
    fontSize: 14,
    color: '#787A8D',
    paddingHorizontal: 10,
    marginHorizontal: 12,
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#E2E2E2',
  },
});
