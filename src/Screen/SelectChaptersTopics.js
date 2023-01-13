import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomButton from '../component/CustomButton';
import NavigateBack from '../component/NavigateBack.js/NavigateBack';
import DropdownWithCheckbox from '../component/CustomDropdown/DropdownWithCheckbox';
import CheckBox from '@react-native-community/checkbox';

const SelectChaptersTopics = () => {
  const navigation = useNavigation();
  const [isValidBox, setIsValidBox] = useState(false);

  const [name, setName] = useState();
  const [passwords, setPasswords] = useState();
  const [agree, setAgree] = useState();

  const submit = () => {
    if (name == 'akash' && passwords == 'kumar') {
      return Alert.alert(`${name} and ${passwords}`);
    } else {
      return Alert.alert('username and password is incorrect');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NavigateBack title="Select Chapters & Topics" />
        <DropdownWithCheckbox />
        <CustomButton
          title="Apply"
          onPress={() => alert('ok')}
          isValid={isValidBox}
          disabled={!isValidBox}
        />
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
