import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NavigateBack from '../component/NavigateBack.js/NavigateBack';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import {color} from '../utils';
import CustomButton from '../component/CustomButton';

const ChaptersAndTopics = props => {
  const [subjectItem, setsubjectItem] = useState();
  const [agree, setAgree] = useState(false);

  return (
    <>
      <View>
        <NavigateBack title="Chapters and Topics Testing" />

        <View style={styles.pickerView}>
          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              value={agree}
              onValueChange={() => setAgree(!agree)}
            />
          </View>

          <View style={styles.pickerText}>
            <Picker
              selectedValue={subjectItem}
              onValueChange={(itemValue, itemIndex) =>
                setsubjectItem(itemValue)
              }>
              <Picker.Item label="Separation of Substances" value="Science" />
            </Picker>
          </View>
        </View>

        <View>
          <TouchableOpacity
            disabled={!agree}
            onPress={() => alert('clicked')}
            style={[{backgroundColor: agree ? color.primary : 'red'}]}>
            <Text style={{color: 'black'}}>Navigate to ScrollPage</Text>
          </TouchableOpacity>

          <CustomButton title={props.title} />
        </View>
      </View>
    </>
  );
};
export default ChaptersAndTopics;

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
});
