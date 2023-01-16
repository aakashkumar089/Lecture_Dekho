import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {color} from '../../utils';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

const DropdownWithCheckbox = () => {
  const [subjectItem, setsubjectItem] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.pickerView}>
        <View style={styles.checkBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
          />
        </View>
        <View style={styles.pickerText}>
          <Picker
            selectedValue={subjectItem}
            onValueChange={(itemValue, itemIndex) => setsubjectItem(itemValue)}>
            <Picker.Item label="Separation of Substances" value="Science" />
          </Picker>
        </View>

        <TouchableOpacity
          disabled={!toggleCheckBox}
          onPress={() => alert('click here')}
          style={{backgroundColor: toggleCheckBox ? color.primary : 'grey'}}>
          <Text style={{color: 'black'}}> Click Me</Text>
        </TouchableOpacity>

        <CustomButton
          title={'Navigate to Scroll Horizontal'}
          disabled={!toggleCheckBox}
          onPress={() => navigation.navigate('ScrollHorizontalScreen')}
          style={{
            backgroundColor: toggleCheckBox ? color.primary : 'grey',
            fontFamily: 'Poppins',
            fontSize: 16,
            lineHeight: 16,
            textAlign: 'center',
            color: '#000',
            justifyContent: 'center',
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pickerView: {
    borderWidth: 1,
    borderRadius: 45,
    marginVertical: 12,
    marginHorizontal: 20,
    borderColor: '#E2E2E2',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkBox: {
    color: '#E2E2E2',
  },
  pickerText: {
    color: 'black',
    // color: '#787A8D',
    width: '80%',
    // flex: 6,
  },
  pickerGradeOut: {
    color: '#E2E2E2',
    // color: '#787A8D',
    width: '80%',
  },

  pickerTextGradeOut: {
    color: '#787A8D',
  },

  textStyle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    color: '#000',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
});
export default DropdownWithCheckbox;
