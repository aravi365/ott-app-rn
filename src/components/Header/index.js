import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import fonts from '../../theme/fonts';
import metrics from '../../theme/metrics';

export default function Header({
  title = 'No Title',
  leftItem,
  leftItemOnPress,
  rightItem,
  rightItemOnPress,
  centreItem,
}) {
  return (
    <View style={styles.container}>
      {/* <SafeAreaView /> */}
      <ImageBackground style={styles.imgBackground} source={images.navbar}>
        <View style={styles.innerContainer1}>
          <Pressable
            hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}
            onPress={leftItemOnPress}>
            {leftItem}
          </Pressable>
          {centreItem}
          <Pressable
            style={{position: 'absolute', right: wp('2.5%')}}
            hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}
            onPress={rightItemOnPress}>
            {rightItem}
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10001,
  },
  imgBackground: {
    position: 'absolute',
    top: 0,
    width: wp('100%'),

    backgroundColor: 'transparent',
    ...Platform.select({
      android: {
        height: hp('12%'),
      },
      ios: {
        height: hp('18%'),
      },
    }),
  },
  innerContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('1%'),
    ...Platform.select({
      android: {
        marginTop: metrics.hasNotch ? hp('4%') : hp('2%'),
      },
      ios: {
        marginTop: hp('6%'),
      },
    }),
  },
  leftButtonImg: {
    height: hp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
  searchButton: {
    height: hp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  titleText: {
    color: colors.white,
    fontFamily: fonts.type.TRegular,
    fontSize: fonts.size.font2,
    marginLeft: wp('3%'),
  },
});
