import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const BannerSlider = ({data}) => {
  console.log(data);
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 150, width: '50%', borderRadius: 10}}
      />
      {/* <Text>{data.title}</Text> */}
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({});
