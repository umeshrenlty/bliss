import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart, removeToCart} from '../redux/action';
import {REMOVE_FROM_CART} from '../redux/constant';
import {useNavigation} from '@react-navigation/native';

const RenderList = data => {
  const navigation = useNavigation();
  const {id, title, price, description, category, image, ratting} =
    data.item.item;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <TouchableOpacity
          style={styles.onclick}
          onPress={() => {
            navigation.navigate('ProductDetails', {
              id,
              title,
              price,
              description,
              category,
              image,
              ratting,
            });
          }}>
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image
                source={{
                  uri: image,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>

              <Text style={styles.price}>₹{price}</Text>
              <Text style={styles.category}>{category}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cart}>
        <TouchableOpacity onPress={() => dispatch(addToCart(data))}>
          <Text style={styles.addCart}>ADD TO CART</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => dispatch(removeToCart(id))}>
          <Text style={styles.addCart}>REMOVE FROM CART</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default RenderList;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 420,
    borderBottomColor: 'black',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  onclick: {},
  data: {
    height: 350,
  },
  main: {
    width: '100%',
    height: '100%',
  },
  box: {
    width: '100%',
    height: '100%',
  },
  imgBox: {
    width: 120,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',

    justifyContent: 'center',
    alignSelf: 'center',
    padding: 18,
  },
  title: {fontSize: 15, fontWeight: '700', color: 'black'},
  price: {
    fontSize: 20,
    color: 'black',
  },
  category: {
    fontSize: 17,
    marginBottom: 0,
    color: 'black',
  },
  addCart: {
    color: '#fff',
    fontSize: 14,

    padding: 14,
    borderRadius: 100,
    backgroundColor: '#4287f5',
  },
  RemoveCart: {
    color: 'black',
    fontSize: 19,
    backgroundColor: '#4287f5',
  },
  cart: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
