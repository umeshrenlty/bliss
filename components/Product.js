import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Product = ({item}) => {
  console.log(item);
  return (
    <View>
      {/* <Image source={item.image} style={{height: 100, width: 100}} /> */}
      <Text>{item.title}</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
