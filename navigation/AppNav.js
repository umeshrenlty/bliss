import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {AuthContext} from '../context/contextLogin';
const AppNav = () => {
  const {userToken} = useContext(AuthContext);
  const {Isloading} = useContext(AuthContext);

  if (Isloading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}>
        <ActivityIndicator size={'small'} />
      </View>
    );
  }
  console.log(userToken,"first");
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
