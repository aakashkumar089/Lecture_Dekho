import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import CustomButton from '../component/CustomButton';
import NavigateBack from '../component/NavigateBack.js/NavigateBack';
import DropdownWithCheckbox from '../component/CustomDropdown/DropdownWithCheckbox';
const SelectChaptersTopics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NavigateBack title="Select Chapters & Topics" />
        <DropdownWithCheckbox />
        <View style={styles.buttonPosition}>
          <CustomButton title="Apply" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  //   buttonPosition: {
  //     position: 'relative',
  //     bottom: 10,
  //   },
});

export default SelectChaptersTopics;
