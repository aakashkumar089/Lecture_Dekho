import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import NavigateBack from '../component/NavigateBack.js/NavigateBack';
import CustomButton from '../component/CustomButton';
import {color} from '../utils';

const names = [
  {id: '1', subName: 'Science'},
  {id: '2', subName: 'Mathematics'},
  {id: '3', subName: 'English'},
  {id: '4', subName: 'Social Science'},
  {id: '5', subName: 'Hindi'},
  {id: '6', subName: 'Sanskrit'},
];
const ScrollHorizontalScreen = () => {
  const [togglecheckBox, setToggleCheckBox] = useState(false);
  const [togglNormalCboxText, settogglNormalCboxText] = useState(false);

  const [subItems, setSubItems] = useState(false);

  const [textScrollColor, setTextScrollColor] = useState(names[0].subName);

  const onChangeTab = value => {
    setTextScrollColor(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NavigateBack title="Select Chapters and Topics" />

        {/* <FlatList
          data={names}
          horizontal
          style={styles.scrollHorizontal}
          renderItem={names}
        /> */}

        <ScrollView horizontal={true}>
          {names.map(item => {
            // console.log('finalitem', item);
            return (
              <View style={{marginTop: 20}} key={item.id}>
                <TouchableOpacity onPress={() => onChangeTab(item.subName)}>
                  <Text
                    style={[
                      styles.textColoronScroll,
                      {
                        color:
                          textScrollColor == item.subName
                            ? color.primary
                            : 'black',
                        borderBottomWidth:
                          textScrollColor == item.subName ? 1.5 : 0,
                        borderBottomColor:
                          textScrollColor == item.subName
                            ? color.primary
                            : 'black',
                      },
                    ]}>
                    {' '}
                    {item.subName}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.lineStyle} />

        <View style={styles.toggleView}>
          <View>
            <CheckBox
              disabled={false}
              value={togglecheckBox}
              onValueChange={() => setToggleCheckBox(!togglecheckBox)}
            />
          </View>

          <View style={styles.pickerView}>
            <Picker
              style={[
                styles.pickerText,
                {color: togglecheckBox ? '#232735' : 'grey'},
              ]}
              selectedValue={subItems}
              onValueChange={itemVal => setSubItems(itemVal)}>
              <Picker.Item label="Body Movements" value="Science" />
              <Picker.Item label="Geometry" value="Maths" />
            </Picker>
          </View>
        </View>

        <View style={styles.toggleView}>
          <View>
            <CheckBox
              disabled={false}
              value={togglNormalCboxText}
              onValueChange={() => settogglNormalCboxText(!togglNormalCboxText)}
            />
          </View>

          <View style={styles.pickerView}>
            <Text
              style={[
                styles.normalCheckboxText,
                {color: togglNormalCboxText ? '#232735' : 'grey'},
              ]}
              selectedValue={subItems}
              onValueChange={e => setSubItems(e)}>
              Fibre to fabric
            </Text>
          </View>
        </View>

        <View style={styles.applyButtonBg}>
          <TouchableOpacity
            disabled={!togglecheckBox && !togglNormalCboxText}
            onPress={() => alert('Clicked')}>
            <Text
              style={{
                backgroundColor:
                  togglecheckBox || togglNormalCboxText
                    ? color.primary
                    : 'grey',
                borderWidth: 1,
                textAlign: 'center',
                borderRadius: 45,
                color: 'white',
                padding: 11,
                paddingHorizontal: '30%',
              }}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
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

  toggleView: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderColor: '#E2E2E2',
    borderRadius: 45,
  },

  pickerView: {
    width: '70%',
  },

  pickerText: {
    fontSize: 14,
  },

  normalCheckboxText: {
    fontSize: 14,
    padding: 17,
  },

  checkBox: {
    color: '#E2E2E2',
  },

  textColoronScroll: {
    fontSize: 14,
    color: 'orange',
    paddingHorizontal: 10,
    marginHorizontal: 12,
  },

  applyButtonBg: {
    alignItems: 'center',
    // borderWidth: 1,
    marginVertical: '10%',
    position: 'relative',
    bottom: 10,
  },
  // buttonText: {
  //   borderWidth: 1,
  //   paddingVertical: 14,
  //   width: '70%',
  //   textAlign: 'center',
  //   borderRadius: 45,
  //   // backgroundColor: 'orange',
  //   // position: 'relative',
  //   // bottom: 10,
  // },
});
