# Lecture_Dekho

import React, { useRef } from 'react';
import { View, Button, CheckBox } from 'react-native';

const MyComponent = () => {
const checkboxRef = useRef(null);
const buttonRef = useRef(null);

const handleCheckboxPress = () => {
if (checkboxRef.current) {
checkboxRef.current.setNativeProps({ value: !checkboxRef.current.props.value });
if (buttonRef.current) {
buttonRef.current.setNativeProps({ disabled: !checkboxRef.current.props.value });
}
}
};

return (
<View>
<CheckBox
        ref={checkboxRef}
        value={false}
        onPress={handleCheckboxPress}
      />
<Button
ref={buttonRef}
title="My Button"
disabled={true}
onPress={() => console.log('Button pressed!')}
/>
</View>
);
};

export default MyComponent;

//////////////////////////////////////////

<View style={styles.pickerView}>
            <View style={styles.checkBox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>

            <View style={styles.pickerGradeOut}>
              <Picker
                selectedValue={subjectItem}
                onValueChange={(itemValue, itemIndex) =>
                  setsubjectItem(itemValue)
                }
                style={styles.pickerTextGradeOut}>
                <Picker.Item label="Separation of Substances" value="Science" />
              </Picker>
            </View>
          </View>

//////////////////////////////////////////////////////
Main file Select CHapters / DropdownWithCheckbox.js

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {color} from '../../utils';
import CustomButton from '../CustomButton';

const DropdownWithCheckbox = () => {
const [subjectItem, setsubjectItem] = useState();
const [toggleCheckBox, setToggleCheckBox] = useState(false);

return (
<>
{toggleCheckBox === true ? (
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
              onValueChange={(itemValue, itemIndex) =>
                setsubjectItem(itemValue)
              }>
              <Picker.Item label="Separation of Substances" value="Science" />
            </Picker>
          </View>
        </View>
      ) : (
        <View style={styles.pickerView}>
          <View style={styles.checkBox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>

          <View style={styles.pickerGradeOut}>
            <Picker
              selectedValue={subjectItem}
              onValueChange={(itemValue, itemIndex) =>
                setsubjectItem(itemValue)
              }
              style={styles.pickerTextGradeOut}>
              <Picker.Item label="Separation of Substances" value="Science" />
            </Picker>
          </View>
        </View>
      )}
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
export default DropdownWithCheckbox;

////////////////////////////

customButton / index.js

import React, {useState} from 'react';
import {
View,
StyleSheet,
Button,
TouchableOpacity,
Text,
Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../utils';

const CustomButton = ({title, onPress, isValid}) => {
return (
<View style={styles.container}>
{isValid == false ? (
<TouchableOpacity onPress={onPress} disabled={isValid} >
<LinearGradient colors={['gray', 'gray']} style={styles.buttonArea}>
<Text style={styles.buttonText}>{title}</Text>
</LinearGradient>
</TouchableOpacity>
) : (
<TouchableOpacity onPress={onPress} disabled={isValid}>
<LinearGradient
colors={[color.primary, color.secondary]}
style={styles.buttonArea}>
<Text style={styles.buttonText}>{title}</Text>
</LinearGradient>
</TouchableOpacity>
)}
</View>
);
};

const styles = StyleSheet.create({
container: {
justifyContent: 'center',
alignItems: 'center',
// display: 'flex',
paddingVertical: 10,
paddingHorizontal: 20,
backgroundColor: '#FFFFFF',
width: '100%',
justifyContent: 'center',
},
buttonArea: {
// position: 'absolute',
width: 305,
height: 50,
borderRadius: 50,
backgroundColor: 'orange',
alignItems: 'center',
justifyContent: 'center',
},
linearGradient: {
flex: 1,
paddingLeft: 15,
paddingRight: 15,
borderRadius: 5,
},

buttonText: {
fontFamily: 'Poppins',
fontSize: 16,
lineHeight: 16,
textAlign: 'center',
color: '#000',
justifyContent: 'center',
color: '#ffffff',
},
});

export default CustomButton;

////////////////////////////

Dummy Login Form with checkbox

<View style={{marginHorizontal: 10}}>
<Text>Login Form</Text>
<View style={{marginVertical: 10}}>
<Text style={{color: 'grey'}}>Enter Name</Text>
<TextInput
style={{
              width: '100%',
              backgroundColor: 'wheat',
              borderRadius: 10,
              color: 'black',
            }}
placeholder="full name"
value={name}
onChangeText={e => setName(e)}
/>
</View>

        <View style={{marginVertical: 10}}>
          <Text style={{color: 'grey'}}>Password</Text>
          <TextInput
            style={{
              width: '100%',
              backgroundColor: 'wheat',
              borderRadius: 10,
              color: 'black',
            }}
            placeholder="password"
            secureTextEntry={true}
            value={passwords}
            onChangeText={e => setPasswords(e)}
          />
        </View>

        <View style={{backgroundColor: 'cornsilk'}}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            disabled={false}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            width: '40%',
            height: '10%',
            marginVertical: 20,
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            disabled={!agree}
            onPress={() => navigation.navigate('ChaptersAndTopics')}
            style={[{backgroundColor: agree ? 'orange' : 'grey'}]}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

//////////////////////////////////

Read me File horizontal scrollHorizontal

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
{key: '1', subName: 'Science'},
{key: '2', subName: 'Mathematics'},
{key: '3', subName: 'English'},
{key: '4', subName: 'Social Science'},
{key: '5', subName: 'Hindi'},
{key: '6', subName: 'Sanskrit'},
];
const ScrollHorizontalScreen = () => {
const [togglecheckBox, setToggleCheckBox] = useState(false);

const [subItems, setSubItems] = useState(false);

// const initialName = {
// initSubName: names[0].subName,
// css: {
// fontSize: 14,
// color: '#787A8D',
// paddingHorizontal: 10,
// marginHorizontal: 12,
// },
// };
const [textScrollColor, setTextScrollColor] = useState(names[0].subName);

console.log('textScrollColor', textScrollColor);
return (
<SafeAreaView style={styles.container}>
<View>
<NavigateBack title="Select Chapters and Topics" />

        <FlatList
          data={names}
          horizontal
          value={textScrollColor}
          onValueChange={e => setTextScrollColor(e)}
          style={styles.scrollHorizontal}
          renderItem={({item}) => {
            return <Text style={styles.textColoronScroll}>{item.subName}</Text>;
          }}
        />

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
              style={styles.pickerText}
              selectedValue={subItems}
              onValueChange={itemVal => setSubItems(itemVal)}>
              <Picker.Item label="Body Movements" value="Science" />
              <Picker.Item label="Geometry" value="Maths" />
            </Picker>
          </View>
        </View>

        <View style={styles.applyButtonBg}>
          <TouchableOpacity
            disabled={!togglecheckBox}
            onPress={() => alert('Clicked')}>
            <Text
              style={{
                backgroundColor: togglecheckBox ? color.primary : 'grey',
                borderWidth: 1,
                // paddingVertical: 14,
                // width: '70%',
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
color: '#232735',
fontSize: 14,
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
// borderWidth: 1,
// paddingVertical: 14,
// width: '70%',
// textAlign: 'center',
// borderRadius: 45,
// // backgroundColor: 'orange',
// // position: 'relative',
// // bottom: 10,
// },
});
