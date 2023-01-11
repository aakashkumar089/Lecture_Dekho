import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import {color} from '../../utils';

const CustomDropdown = () => {
  const [subjectItem, setsubjectItem] = useState();
  //   const [easyItem, seteasyItem] = useState('Select Value');

  return (
    <View style={styles.container}>
      <View style={styles.pickerView}>
        <Picker
          selectedValue={subjectItem}
          onValueChange={(itemValue, itemIndex) => setsubjectItem(itemValue)}
          style={styles.pickerText}>
          <Picker.Item label="Science" value="Science" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    marginVertical: 24,
  },

  pickerView: {
    borderWidth: 1,
    borderRadius: 45,
    marginVertical: 12,
    marginHorizontal: 20,
    borderColor: '#E2E2E2',
  },

  pickerText: {
    color: '#787A8D',
  },
});

export default CustomDropdown;
