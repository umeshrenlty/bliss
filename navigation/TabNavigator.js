import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import BasicSkin from '../screens/skinCare/BasicSkin';
import DrySkin from '../screens/skinCare/DrySkin';
import HairRemoval from '../screens/skinCare/HairRemoval';
import Tattos from '../screens/skinCare/TattosSkin';
// import HomeScreen from '../screens/HomeScreen';
// import CartScreen from '../screens/TabScreen/CartScreen';
import FavoriteScreen from '../screens/TabScreen/favoritateScreen';
// import GameDetailsScreen from '../screens/TabScreen/favoritateScreen';
import HomeScree from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
// import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductScreen/ProductDetails';
import Header from '../components/header';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import ShoppingCart from '../screens/ProductScreen/ShoppingCart';
import CartScreen from '../screens/ProductScreen/cartScreen';
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hom"
        component={HomeScree}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bliss"
        component={Header}
        options={{
          headerRight: props => <ShoppingCart {...props} />,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#0f1012',
          },
          headerStyle: {
            backgroundColor: '#f692f7',
          },
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerTitleAlign: 'center',
          title: 'Detail',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#0f1012',
            textAlign: 'center',
          },
          headerStyle: {
            backgroundColor: '#fff',
            textAlign: 'center',
          },
        }}
      />

      <Stack.Screen name="Basic" component={BasicSkin} />
      <Stack.Screen name="Dry" component={DrySkin} />
      <Stack.Screen name="Hair" component={HairRemoval} />
      <Stack.Screen name="Tattoos" component={Tattos} />
      <Stack.Screen name="cartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#AD40AF'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'yellow'},
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if (routeName == 'GameDetails') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
