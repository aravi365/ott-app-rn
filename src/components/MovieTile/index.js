import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../theme/colors';

export default function MovieTile({title = 'Untitled', img}) {
  //to extract filename without extension
  let name = img.replace(/\.[^/.]+$/, '');
  return (
    <View style={styles.container}>
      <Image style={styles.movieImg} source={images[name]} />
      <Text style={{color: colors.white}}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: wp('1%'),
    marginBottom: hp('3%'),
  },
  movieImg: {
    width: wp('32%'),
    height: hp('20%'),
    resizeMode: 'contain',
  },
});
