import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {color} from '../../utils';

const DropdownWithCheckbox = () => {
  const [subjectItem, setsubjectItem] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.pickerView}>
      <View style={styles.checkBox}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={toggleCheckBox ? 'red' : 'grey'}
        />
      </View>

      <View style={styles.pickerText}>
        <Picker
          selectedValue={subjectItem}
          onValueChange={(itemValue, itemIndex) => setsubjectItem(itemValue)}>
          <Picker.Item label="Separation of Substances" value="Science" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerView: {
    borderWidth: 1,
    borderRadius: 45,
    marginVertical: 12,
    marginHorizontal: 20,
    borderColor: '#E2E2E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkBox: {},
  pickerText: {
    color: 'black',
    // color: '#787A8D',
    width: '80%',
    // flex: 6,
  },
});
export default DropdownWithCheckbox;
