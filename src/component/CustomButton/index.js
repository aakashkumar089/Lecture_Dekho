import React from 'react';
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

const CustomButton = ({title}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[color.primary, color.secondary]}
        style={styles.buttonArea}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
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
