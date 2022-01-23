import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import api from '../../api';
import Header from '../../components/Header';
import strings from '../../theme/strings';
import MovieTile from '../../components/MovieTile';
const dummy = [
  {
    name: 'Rear Window',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster6.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster4.jpg',
  },
  {
    name: 'The Birds',
    'poster-image': 'poster6.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster6.jpg',
  },
  {
    name: 'The Birds',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster4.jpg',
  },
  {
    name: 'The Birds',
    'poster-image': 'poster4.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster6.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster4.jpg',
  },
  {
    name: 'The Birds',
    'poster-image': 'poster6.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster6.jpg',
  },
];
export default function Home() {
  // React.useEffect(() => {
  //   async function callApi() {
  //     let res = await api();
  //     console.log('api resp', res);
  //   }
  //   callApi();
  // }, []);
  return (
    <View style={styles.container}>
      <Header
        title={strings.listing.rc_title}
        leftIcon={
          <Image style={styles.leftButtonImg} source={images.backArrow} />
        }
        rightIcon={
          <Image style={styles.rightButtonImg} source={images.search} />
        }
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        style={styles.flStyle}
        data={dummy}
        renderItem={({item, index}) => (
          <MovieTile title={item?.name} img={item['poster-image']} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  leftButtonImg: {
    height: hp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
  rightButtonImg: {
    height: hp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  flStyle: {
    paddingBottom: hp('4%'),
  },
});
