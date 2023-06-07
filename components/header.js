import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {productSearch} from '../redux/productActions';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../redux/constant';
import {addToCart} from '../redux/action';
import {productList} from '../redux/productActions';
import {useSelector} from 'react-redux';

import {SafeAreaView} from 'react-native-safe-area-context';
import RenderList from './renderList';

const Header = () => {
  const stat = useSelector(state => state);
  const state = stat.productData;
  console.log(state, 'redux-data');
  const {data, setData} = useState('ff');

  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(productList());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.search}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/search.png')}
              style={{width: 18, height: 18, marginLeft: 18}}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="search item..."
              value={data}
              onChangeText={event => disaptch(productSearch(event))}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setData('');
            }}>
            <Image
              source={require('../assets/cancel.png')}
              style={{width: 18, height: 18, marginRight: 18}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.filter}>
          <TouchableOpacity>
            <Image
              source={require('../assets/filter.png')}
              style={{width: 18, height: 18, marginRight: 18}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={state}
        renderItem={dat => <RenderList item={dat} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  box: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: 90,
    marginTop: 15,
    justifyContent: 'space-between',
  },
  search: {
    borderRadius: 100,
    margin: 18,
    width: '80%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addCart: {
    backgroundColor: 'blue',

    color: '#fff',
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    marginLeft: 15,
  },
  RemoveCart: {
    margin: 15,
    backgroundColor: 'blue',
    color: '#fff',
  },
  EmptyCart: {
    margin: 10,
    backgroundColor: 'blue',
    color: '#fff',
  },
  ProductList: {
    margin: 10,
    backgroundColor: 'yellow',
    color: 'black',
  },
});
// <View key={e.id}>
//   <Text>{e.category}</Text>
//   <Image
//     style={{width: 100, height: 100}}
//     source={{
//       uri: e.image,
//     }}
//   />
// </View>
