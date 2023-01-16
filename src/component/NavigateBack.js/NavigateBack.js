import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const NavigateBack = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center', width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
          marginVertical: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/icons/Frame_79782.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
          {title}
        </Text>
        <View>
          <Text style={{color: '#fff'}}>--------</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    width: 35,
    height: 35,
    color: '#787A8D',
  },
});

export default NavigateBack;
