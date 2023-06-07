import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import {windowHeight, windowWidth} from '../utils/demesions';
import BannerSlider from '../components/BannerSlider';
import Product from '../components/Product';
import {sliderData} from '../model/data';
import {ProductData} from '../model/data';
import {BrandData} from '../model/data';
import Svg, {Path} from 'react-native-svg';

const HomeScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    //the app will represent each list item via a Text component

    return (
      <View style={{marginHorizontal: 10, marginTop: 15}}>
        <Image
          style={{width: 55, height: 75, borderRadius: 8}}
          source={item.image}
        />
        <Text
          style={{
            fontSize: 10,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', marginBottom: 10}}>
      <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontFamily: 'Roboto-Bold', fontSize: 16}}>
            Hello Umesh Sahoo
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/back.jpeg')}
              style={{width: 35, height: 39}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: 10,

            backgroundColor: '#C6E6F4',
          }}>
          <Icon
            name="search"
            size={20}
            color="#c42f57"
            style={{marginTop: 15, marginRight: 5}}
          />
          <TextInput placeholder="Search On Bliss" style={{fontSize: 16}} />
        </View>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 25, fontFamily: 'Roboto-Medium'}}>
            Skin Care
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#0aada8', fontSize: 15, marginTop: 5}}>
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            style={styles.flat}
            data={ProductData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // extraData={selectedId}
            horizontal={true}
          />
        </View>

        {/* <View style={styles.brands}>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              Brands You Will Love
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto-Regular',
                marginHorizontal: 10,
                marginTop: 2,
              }}>
              Top Skincare Brands
            </Text>
          </View>

          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {BrandData?.map(item => {
              return (
                <View style={styles.brandslist} key={item.id}>
                  <TouchableOpacity style={styles.btn}>
                    <View style={styles.box}>
                      <Image source={item.image} style={styles.img} />

                      <View style={styles.txt}>
                        <Text style={styles.discount}>{item.discount}</Text>
                        <Text>{item.discription}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View> */}
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginHorizontal: 6,
              marginTop: 10,
              marginBottom: 10,
            }}>
            Skin care Basics
          </Text>
          {/* <Text>
            How you care for your skin can greatly affect your appearance. Here
            you’ll find the everyday care that dermatologists recommend.
          </Text> */}
          <View style={[styles.imgCard, styles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Bliss')}>
              <View>
                <Image
                  source={require('../assets/homescreen/skin01.jpg')}
                  style={{height: 150, width: '100%'}}
                />
              </View>
              <Text style={styles.text}>Basic skin care</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.imgCard, styles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Dry')}>
              <View>
                <Image
                  source={require('../assets/homescreen/skin03.jpg')}
                  style={{height: 150, width: '100%'}}
                />
              </View>
              <Text style={styles.text}>Dry skin,oily skin</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.imgCard, styles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Hair')}>
              <View>
                <Image
                  source={require('../assets/homescreen/skin04.jpeg')}
                  style={{height: 150, width: '100%'}}
                />
              </View>
              <Text style={styles.text}>Hair removal</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.imgCard, styles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Tattoos')}>
              <View>
                <Image
                  source={require('../assets/homescreen/skin02.jpg')}
                  style={{height: 150, width: '100%'}}
                />
              </View>
              <Text style={styles.text}>Tattoos and piercings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    padding: 0,
  },
  brandslist: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginBottom: 10,
  },
  btn: {
    marginTop: 12,
    borderWidth: 0.2,
    borderColor: 'black',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  box: {
    width: '100%',
    padding: 0,
  },
  txt: {
    padding: 15,
  },
  discount: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
  },
  imgCard: {
    width: '100%',
    borderRadius: 4,
    marginTop: 5,
    // paddingVertical: 45,
    // paddingHorizontal: 10,
    // marginVertical: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 0.1,
    height: 200,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  text: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 10,
    marginTop: 5,
    alignSelf: 'center',
  },
});
