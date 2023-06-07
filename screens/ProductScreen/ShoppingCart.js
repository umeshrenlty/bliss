import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
const ShoppingCart = () => {
  const result = useSelector(state => state.cartData);
  const navigation = useNavigation();
  return (
    <View
      style={[
        {padding: 5},
        Platform.OS == 'android' ? styles.iconContainer : null,
      ]}>
      {/* <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}

      <TouchableOpacity
        onPress={() => navigation.navigate('cartScreen', result)}>
        <View style={styles.icon}>
          <View style={styles.textHeader}>
            <Text style={styles.txt}>{result.length}</Text>
          </View>
          <Image
            style={styles.main}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  icon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
  textHeader: {
    backgroundColor: '#ed7e98',
    height: 20,
    width: 28,
    position: 'absolute',
    top: -10,
    right: 0,
    color: '#fff',
    borderRadius: 100,
  },
  txt: {
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
