import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Lottie from 'lottie-react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from '../assets/images/misc/google.svg';
import Facebook from '../assets/images/misc/facebook.svg';
import Twitter from '../assets/images/misc/twitter.svg';

import HomeScreen from './HomeScreen';
import {AuthContext} from '../context/contextLogin';
const LoginScreen = ({navigation}) => {
  const {login, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Lottie
            source={require('../assets/try.json')}
            autoPlay
            loop
            style={{width: 300, height: 200, transform: [{rotate: '-2  deg'}]}}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <MaterialIcon
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Email "
            style={{flex: 1, paddingVertical: 0}}
            keyboardType="email-address"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Password "
            style={{flex: 1, paddingVertical: 0}}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                color: '#ad40af',
                fontSize: 15,
                letterSpacing: 1,
              }}>
              Forgot?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            login();
          }}
          style={{
            backgroundColor: '#ad40af',
            padding: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              color: '#fff',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: 30,
            fontSize: 16,
            fontFamily: 'Roboto-Regular',
          }}>
          Or, login with ...
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Google height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            {/* <Ionicons
              name="logo-google"
              size={30}
              color="#666"
              style={{marginRight: 5}}
            /> */}
            <Facebook height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Twitter height={24} width={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text style={{fontWeight: '500'}}>New to the app?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.txt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt: {
    color: '#ad40af',
    fontWeight: 'bold',
    marginLeft: 4,
  },
});
