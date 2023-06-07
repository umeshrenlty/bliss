import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CartRenderList from './cartRenderList';
const CartScreen = () => {
  const stat = useSelector(state => state.cartData);
  console.log(stat, 'cartScreeData');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>cartScreen</Text>
      </View>
      <View>
        <FlatList
          numColumns={1}
          data={stat}
          renderItem={data => <CartRenderList item={data} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    color: 'black',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb349e',
    borderRadius: 100,
  },
  text: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#fff',
    fontWeight: 'bold',

    padding: 17,
    textTransform: 'uppercase',
  },
});
