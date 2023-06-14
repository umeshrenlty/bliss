import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {removeToCart} from '../../redux/action';
import {useDispatch} from 'react-redux';
const CartRenderList = ({item}) => {
  // console.log(data, 34567876543222);
  const {id, title, price, description, category, image, ratting} =
    item.item.item.item;
  // console.log(id, price, image);
  const dispatch = useDispatch();
  return (
    <View style={styles.container} >
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
          {/* <Text style={styles.title}>{title}</Text> */}

          <Text style={styles.price}>₹{price}</Text>
          <TouchableOpacity onPress={() => dispatch(removeToCart(id))}>
            <Text style={styles.addCart}>REMOVE FROM CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartRenderList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderBottomColor: 'black',
    borderWidth: 1,
    marginBottom: 10,

    backgroundColor: '#fff',
    borderRadius: 100,
    position: 'relative',
  },
  onclick: {},
  data: {
    height: 40,
  },
  main: {
    width: '100%',
    height: '100%',
  },
  box: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgBox: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  content: {
    width: '50%',

    padding: 18,
  },
  title: {fontSize: 15, fontWeight: '700', color: 'black'},
  price: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  category: {
    fontSize: 17,
    marginBottom: 0,
    color: 'black',
  },

  RemoveCart: {
    color: 'black',
    fontSize: 19,
    backgroundColor: '#4287f5',
  },
  cart: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addCart: {
    color: '#fff',
    fontSize: 10,

    padding: 14,
    borderRadius: 100,
    backgroundColor: '#eb349e',
  },
});
