import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import CustomButton from '../component/CustomButton';
import CustomDropdown from '../component/CustomDropdown/CustomDropdown';
import {useNavigation} from '@react-navigation/native';
import NavigateBack from '../component/NavigateBack.js/NavigateBack';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <NavigateBack title="Create Test" />
        <CustomDropdown />
        <View style={styles.buttonPosition}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectChaptersTopics');
            }}>
            <CustomButton title="Next" />
          </TouchableOpacity>
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

  buttonPosition: {
    position: 'relative',
    bottom: 10,
  },
});
export default HomeScreen;
