import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const BrandList = ({data}) => {
  return (
    <View style={{width: '100%'}}>
      <View style={styles.box}>
        <View style={{height: 100, width: 100}}>
          <Image source={data.image} />
        </View>
        <Text>{data.discount}</Text>
        <Text>{data.discription}</Text>
      </View>
    </View>
  );
};

export default BrandList;

const styles = StyleSheet.create({
  box: {
    borderRadius: 50,
    backgroundColor: 'blue',
    width: '50%',
    height: 300,
  },
});
