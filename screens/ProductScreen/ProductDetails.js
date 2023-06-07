import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/action';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ProductDetails = data => {
  const dispatch = useDispatch();
  console.log(data);
  const {id, title, price, description, category, image, ratting} =
    data.route.params;
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          style={{
            height: 250,
            width: '80%',
            resizeMode: 'contain',
            marginVertical: 26,
          }}
          source={{uri: image}}
        />
      </View>
      <View style={styles.detail}>
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceText}>${price}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginRight: 5,
                resizeMode: 'contain',
                marginVertical: 26,
              }}
              source={require('../../assets/star.png')}
            />
            <Image
              style={{
                height: 30,
                width: 30,
                marginRight: 5,
                resizeMode: 'contain',
                marginVertical: 26,
              }}
              source={require('../../assets/star.png')}
            />
            <Image
              style={{
                height: 30,
                width: 30,
                marginRight: 5,
                resizeMode: 'contain',
                marginVertical: 26,
              }}
              source={require('../../assets/star.png')}
            />
            <Image
              style={{
                height: 30,
                width: 30,
                marginRight: 5,
                resizeMode: 'contain',
                marginVertical: 26,
              }}
              source={require('../../assets/star.png')}
            />
            <Text>1,250 Revivew</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(addToCart(data))}
        style={styles.btn}>
        <Text style={styles.addCart}>ADD TO CART</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => dispatch(removeToCart(id))}>
          <Text style={styles.addCart}>REMOVE FROM CART</Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  img: {
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.6,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  box: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 8,
  },
  category: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  price: {
    backgroundColor: 'black',
    width: 60,
    height: 73,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    color: '#fff',
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
  },
  cart: {
    flexDirection: 'row',
  },
  addCart: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    padding: 14,

    backgroundColor: 'black',
  },
  btn: {
    position: 'absolute',
    left: 0,
    height: 50,
    bottom: 0,
    width: windowWidth,
  },
});
