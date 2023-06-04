import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [Isloading, SetIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const login = () => {
    setUserToken('h');
    AsyncStorage.setItem('userToken', 'h');
    SetIsLoading(false);
  };
  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    SetIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      SetIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
      SetIsLoading(false);
    } catch (e) {
      console.log(`islogged in error ${e}`);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{login, logout, Isloading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
